---
title: "I Built an AI That Qualifies Leads. The Best Decision Was Letting It Say Yes Too Often."
description: "A first-person build story about AI lead qualification: why a permissive classifier beats a strict one, why database labels lie, and why the ICP criteria belong in prose."
excerpt: "Most people build the strict version of an AI qualifier and delete their own pipeline without noticing. A false negative is invisible and permanent. A false positive costs one call. That asymmetry changes the whole design."
slug: "ai-lead-qualifier-permissive-by-design"
author: "The B2B Tinkerers"
date: 2026-10-22
tag: "AI & Marketing"
readTime: "7 min read"
image: "../../assets/blog/ai-qualifier-cover.webp"
translationKey: "ai-qualifier-permissive"
---

Somewhere in the building, usually the newest SDR or whoever lost the argument, someone is working through a spreadsheet. A few hundred rows, each one a company, pulled out of a contact database because somebody applied a filter. Their job is to read those rows one at a time and decide which companies are worth a call.

Open the website, squint at it, guess, and move on to the next row.

That's where AI lead qualification earns its keep, and it's also where most outbound dies, well before the pitch or the sequence: in the two hours a week nobody wants to spend checking whether a list of companies has anything to do with your ICP.

I've been working as a fractional CMO for a B2B SaaS platform in industrial logistics. They sell to mid-market manufacturers, through a micro-committee of logistics, IT and procurement, on a pure outbound motion. There's no inbound safety net to catch the mistakes, so if the list is wrong, the quarter is wrong.

The manual process had all three of the classic problems. It was slow. It was inconsistent, because two people qualified the same company differently, and the same person qualified differently at 6pm on Friday than at 10am on Tuesday. And it never finished: it got abandoned every time something more urgent showed up, which is the worst of the three, because then nothing gets qualified at all.

So I built a small script. It works because of three design decisions, one of which sounds like a bug.

## What it does

For each company on the list, the script asks a frontier model with web search to find out what that company *actually does* in the real world, whatever the database says about it. Then it classifies that against the ICP model and writes a row to a spreadsheet: the verdict, the reasoning behind it, the sources it consulted, and a note for the rep who's going to make the call.

It checkpoints after each company, so if the run dies at company 63 of 100, it picks up at 64 instead of starting over. Boring detail, saves your afternoon.

That's the whole thing: a loop, a prompt and a CSV, with no agent swarm or platform anywhere in it.

## Decision 1: It says yes too often, on purpose

![One shape fading silently into nothing while another bounces off a barrier and carries on](../../assets/blog/ai-qualifier-01.webp)

I'd defend this decision harder than the other two, and it's the one everybody argues with first.

When the evidence is ambiguous, the classifier answers **yes**, with a note telling the rep exactly what to verify on the call. It doesn't hedge or abstain, and it never drops the company into a "maybe" bucket that nobody opens.

That's not sloppiness. It's arithmetic on the cost of being wrong.

Think about what each error costs you. A false positive means a rep makes one call that goes nowhere. It's annoying, but it's visible and it's over in fifteen minutes, and somebody will tell you about it, probably that same day.

A false negative costs you a customer, and you will never know it happened. The company is silently deleted from your world: it doesn't appear in a report, nobody complains about it, and it isn't sitting in a rejected pile you can review, because the whole point of rejecting it was to not look at it again. That makes the error both invisible and permanent.

Those two errors are not the same size, and yet almost everyone builds as if they were. The instinct is to make the classifier strict, because a strict classifier feels rigorous: it gives you a clean list and looks like judgment. Meanwhile it's deleting your pipeline in a way that never shows up on a dashboard, so you get to feel precise while your reachable market shrinks.

The mental model I keep coming back to: **the human is the filter, the machine is the funnel.** The machine's job is to be wide and cheap and tireless. The rep's job is to be the one who decides, on the call, with a human on the other end. Ask the machine to do the deciding and you've handed your most consequential judgment to the part of the system that can't ask a follow-up question.

So when the model can't tell, it says yes and it says *here's what I couldn't tell*. That passes the ambiguity forward to the person who can resolve it, so it never gets settled by a guess in a script.

## Decision 2: The label lies

The second decision came from an obvious thing that nobody acts on: the industry label in your contact database is fiction.

I've watched a database confidently tag an industrial manufacturer as "Retail." The company was ordinary and so was the mistake: a wrong label, sitting there in a column, being trusted. That label is metadata, and it came from a scrape, a self-declared field on a form, or a category system designed years ago for someone else's purposes.

If you filter on it, you inherit every error in it, and a filter's errors fail silently. The companies just never show up.

So the classifier doesn't trust the label and goes to look. It reads what the company says about itself right now, on the live web, and cites the sources it used. The citations matter more than they sound. They turn the output into an argument with references attached, which means a rep who disagrees can open the sources and check the reasoning in thirty seconds.

A yes/no from an AI asks for faith, while a yes/no plus its working is something you can audit. Only the second gets past a sales team, because sales teams are professionally skeptical, and they should be.

## Decision 3: The criteria live in prose

![Layered document panels stacked in versioned sequence over a plain grid field](../../assets/blog/ai-qualifier-02.webp)

The ICP model lives outside the script, in a plain-language prompt file that's versioned like any other document and written in sentences a human can read.

Where it lives is a political question, because it decides who owns your ICP. The moment your ICP criteria are expressed as code, ownership of the ICP moves to whoever can edit the code. If marketing wants to sharpen a criterion, marketing files a ticket and waits. The definition of who you sell to, which is arguably the single most important judgment in the company, now has a queue in front of it.

When it's prose, changing the criteria means editing a paragraph, and the person who owns the ICP owns the file, with no ticket, sprint or translation layer between the thinking and the system. That file has already been through several versions as the criteria sharpened, and every one of those revisions took minutes. Sharpening an ICP is a marketing act, and it should feel like writing.

If you're building anything like this, put the judgment in language and keep the code dumb, so the thinking stays readable by the person doing the thinking. That's the same principle behind most of the [AI strategy work](/services/ai-strategy) I do: put the decision somewhere the right human can reach it.

## What it costs, and how we'll know it works

The operating numbers are unglamorous. Each company takes roughly 15 to 30 seconds and costs about $0.03 to $0.06 (€0.03 to €0.05). A batch of around 100 companies runs in 30 to 50 minutes for roughly $5 to $8 (€4.50 to €7). That's the whole economics, and you can run it on the coffee budget.

I can't tell you it works yet. We set a bar before we started, which is the only order that means anything: agreement above 85% against a reference set of 64 companies that were classified by hand. That validation is still running, so I don't have a number for you, and if I had one this soon you should be suspicious of it.

I'm telling you this because the alternative is the thing I dislike most about how AI gets written about in B2B marketing. Somebody builds a tool, describes it in confident prose, and lets the absence of a stated bar imply that it cleared one. What I have is a design I believe in and a test I haven't finished. Those are different things and I'd rather say so than pad this piece with a number I invented.

If it clears 85% it ships as the default, and if it doesn't the prompt file gets another version and we run it again.

## The leverage wasn't the model

The model I used is available to everyone reading this, at the same price, today, and that includes your competitor and your intern. There is no advantage in the model, and anyone selling you one is selling you access to something you already have.

The advantage, if there is one here, is in three decisions that took an afternoon of thinking and no engineering talent whatsoever. Be permissive, because your errors aren't symmetrical. Verify against the world, since your database is lying to you. And keep the criteria in prose so the person who owns the judgment owns the file.

Each of those is a marketing call, applied to a tool that will do exactly what you tell it and has no opinion about whether what you told it was smart.

---

*At The B2B Tinkerers, we help B2B teams put AI where it creates leverage, and keep it away from the decisions that need a human. If you want a second opinion on what you're building, [let's talk](#contact). Or see how we work as a [fractional CMO](/services/fractional-cmo).*
