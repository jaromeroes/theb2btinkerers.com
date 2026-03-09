import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { createRequire } from "module";
import { writeFile, mkdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// The Higgsfield SDK is CJS-only, use createRequire to import it
const require = createRequire(import.meta.url);
const { higgsfield, config } = require("@higgsfield/client/v2");

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, "..");
const IMAGES_DIR = join(PROJECT_ROOT, "public", "images");

// Configure credentials from environment
const credentials = process.env.HF_CREDENTIALS;
if (credentials) {
  config({ credentials });
}

const server = new McpServer({
  name: "higgsfield",
  version: "1.0.0",
});

server.tool(
  "generate-image",
  "Generate a WebP image using Higgsfield AI and save it to public/images/",
  {
    prompt: z.string().describe("Text description of the image to generate"),
    filename: z
      .string()
      .regex(/^[\w-]+$/, "Alphanumeric, hyphens, and underscores only")
      .describe("Filename without extension (e.g. 'hero-saas-dashboard')"),
    aspect_ratio: z
      .enum(["1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3"])
      .default("16:9")
      .describe("Image aspect ratio"),
    model: z
      .string()
      .default("flux-pro/kontext/max/text-to-image")
      .describe("Higgsfield model endpoint"),
    safety_tolerance: z
      .number()
      .min(0)
      .max(6)
      .default(2)
      .describe("Content safety tolerance (0=strict, 6=permissive)"),
  },
  async ({ prompt, filename, aspect_ratio, model, safety_tolerance }) => {
    try {
      // Ensure output directory exists
      await mkdir(IMAGES_DIR, { recursive: true });

      const response = await higgsfield.subscribe(model, {
        input: {
          prompt,
          aspect_ratio,
          safety_tolerance,
        },
        withPolling: true,
      });

      if (response.status === "failed") {
        return {
          content: [
            {
              type: "text",
              text: `Generation failed. Request ID: ${response.request_id}`,
            },
          ],
          isError: true,
        };
      }

      if (response.status === "nsfw") {
        return {
          content: [
            {
              type: "text",
              text: "Image rejected: content flagged as NSFW. Try a different prompt.",
            },
          ],
          isError: true,
        };
      }

      const imageUrl = response.images?.[0]?.url;
      if (!imageUrl) {
        return {
          content: [
            {
              type: "text",
              text: `No image URL in response. Status: ${response.status}, Request ID: ${response.request_id}`,
            },
          ],
          isError: true,
        };
      }

      // Download the image
      const imageResponse = await fetch(imageUrl);
      if (!imageResponse.ok) {
        return {
          content: [
            {
              type: "text",
              text: `Failed to download image: HTTP ${imageResponse.status}`,
            },
          ],
          isError: true,
        };
      }

      const buffer = Buffer.from(await imageResponse.arrayBuffer());
      const contentType = imageResponse.headers.get("content-type") || "";

      // Determine output filename and whether conversion is needed
      let outputFilename;
      if (contentType.includes("webp")) {
        outputFilename = `${filename}.webp`;
      } else {
        // Save with original extension, note in response
        const ext = contentType.includes("png")
          ? "png"
          : contentType.includes("jpeg") || contentType.includes("jpg")
            ? "jpg"
            : "webp";
        outputFilename = `${filename}.${ext}`;
      }

      const outputPath = join(IMAGES_DIR, outputFilename);
      await writeFile(outputPath, buffer);

      const relativePath = `public/images/${outputFilename}`;
      const astroPath = `/images/${outputFilename}`;

      return {
        content: [
          {
            type: "text",
            text: [
              `Image generated and saved successfully.`,
              ``,
              `- File: ${relativePath}`,
              `- Astro src: ${astroPath}`,
              `- Model: ${model}`,
              `- Aspect ratio: ${aspect_ratio}`,
              `- Size: ${(buffer.length / 1024).toFixed(1)} KB`,
              `- Content-Type: ${contentType}`,
              `- Request ID: ${response.request_id}`,
              ``,
              `Use in Astro:`,
              `  <img src="${astroPath}" alt="..." />`,
            ].join("\n"),
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
);

server.tool(
  "list-models",
  "List available Higgsfield image generation models",
  {},
  async () => {
    const models = [
      {
        endpoint: "flux-pro/kontext/max/text-to-image",
        description: "FLUX Pro Kontext Max — highest quality text-to-image",
      },
      {
        endpoint: "flux-pro/kontext/text-to-image",
        description: "FLUX Pro Kontext — fast, high quality text-to-image",
      },
      {
        endpoint: "/v1/text2image/soul",
        description: "Higgsfield SOUL — stylized, character-consistent images",
      },
    ];

    return {
      content: [
        {
          type: "text",
          text: models
            .map((m) => `- **${m.endpoint}**\n  ${m.description}`)
            .join("\n\n"),
        },
      ],
    };
  }
);

// Start the server
const transport = new StdioServerTransport();
await server.connect(transport);
