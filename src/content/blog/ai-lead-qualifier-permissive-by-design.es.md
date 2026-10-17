---
title: "Construí una IA que califica leads. La mejor decisión fue dejar que dijera que sí demasiadas veces."
description: "Historia en primera persona de un clasificador de ICP con IA: por qué conviene que sea permisivo, por qué la etiqueta de tu base de datos miente y por qué el criterio va en prosa."
excerpt: "Casi todo el mundo construye la versión estricta y borra su propio pipeline sin enterarse. Un falso negativo es invisible y permanente. Un falso positivo cuesta una llamada. Esa asimetría lo cambia todo."
slug: "clasificador-icp-con-ia-permisivo-por-diseno"
author: "The B2B Tinkerers"
date: 2026-10-22
tag: "IA y Marketing"
readTime: "7 min de lectura"
image: "../../assets/blog/ai-qualifier-cover.webp"
lang: "es"
translationKey: "ai-qualifier-permissive"
---

En algún sitio de la oficina, normalmente el SDR más nuevo o quien perdió la discusión, alguien está peleándose con un Excel. Unos cientos de filas, una por empresa, sacadas de una base de datos de contactos porque alguien aplicó un filtro. Su trabajo es leer esas filas de una en una y decidir qué empresas merecen una llamada.

Abrir la web, entrecerrar los ojos, adivinar y pasar a la siguiente fila.

Ahí es donde la calificación de leads con IA se gana el sueldo, y ahí es también donde se muere el outbound, mucho antes del pitch o de la secuencia: en las dos horas semanales que nadie quiere dedicar a comprobar si una lista de empresas tiene algo que ver con tu ICP.

Llevo un tiempo trabajando como fractional CMO para una plataforma SaaS B2B de logística industrial. Venden a fabricantes de mid-market, a través de un micro-comité de logística, IT y compras, con un motion puramente outbound. No hay red de inbound que recoja los errores, así que si la lista está mal, el trimestre está mal.

El proceso manual tenía los tres problemas de siempre. Era lento. Era inconsistente, porque dos personas calificaban la misma empresa de forma distinta, y la misma persona calificaba distinto un viernes a las 18:00 que un martes a las 10:00. Y no terminaba nunca: se abandonaba cada vez que aparecía algo más urgente, que es el peor de los tres fallos, porque entonces no se califica nada.

Así que construí un script pequeño. Funciona gracias a tres decisiones de diseño, y una de ellas suena a error.

## Qué hace exactamente

Para cada empresa de la lista, el script le pide a un modelo frontera con búsqueda web que averigüe a qué se dedica esa empresa *de verdad*, en el mundo real, diga lo que diga la base de datos. Después lo clasifica contra el modelo de ICP y escribe una fila en una hoja de cálculo: el veredicto, el razonamiento, las fuentes que consultó y una nota para el comercial que va a hacer la llamada.

Guarda un checkpoint después de cada empresa, así que si la ejecución se cae en la empresa 63 de 100, retoma en la 64 en vez de empezar de cero. Detalle aburrido, te salva la tarde.

Y eso es todo: un bucle, un prompt y un CSV, sin enjambres de agentes ni plataformas de por medio.

## Decisión 1: dice que sí demasiadas veces, a propósito

![Una forma que se desvanece en silencio hasta desaparecer mientras otra rebota en una barrera y sigue su camino](../../assets/blog/ai-qualifier-01.webp)

De las tres decisiones, es la que más defendería, y la primera que todo el mundo me discute.

Cuando la evidencia es ambigua, el clasificador responde **sí** y añade una nota que le dice al comercial exactamente qué tiene que verificar en la llamada. No se escaquea ni se abstiene, y nunca deja la empresa en un cajón de "quizá" que nadie abre jamás.

Eso no es dejadez. Es aritmética sobre el coste de equivocarse.

Piensa en lo que te cuesta cada error. Un falso positivo significa que un comercial hace una llamada que no va a ningún sitio. Es molesto, pero se ve y se resuelve en quince minutos, y alguien te lo va a contar, probablemente ese mismo día.

Un falso negativo te cuesta un cliente, y nunca vas a saber que pasó. Esa empresa desaparece de tu mundo sin hacer ruido: no sale en ningún informe, nadie se queja y no está en ningún montón de descartes que puedas revisar, porque el sentido de descartarla era precisamente no volver a mirarla. Por eso el error es invisible y permanente.

Esos dos errores no tienen el mismo tamaño, y aun así casi todo el mundo construye como si lo tuvieran. El instinto es hacer el clasificador estricto, porque un clasificador estricto parece riguroso: te da una lista limpia y tiene pinta de criterio. Pero por debajo te está borrando el pipeline de una forma que no aparece en ningún dashboard, y tú te sientes preciso mientras tu mercado alcanzable encoge.

El modelo mental al que vuelvo siempre: **el humano es el filtro, la máquina es el embudo.** El trabajo de la máquina es ser ancha, barata e incansable. El trabajo del comercial es ser quien decide, en la llamada, con un humano al otro lado. Si le pides a la máquina que decida, has puesto tu juicio más importante en la parte del sistema que no puede hacer una repregunta.

Así que cuando el modelo no lo tiene claro, dice que sí y dice *esto es lo que no he podido determinar*. La ambigüedad pasa hacia delante, a la persona que puede resolverla, y ningún script tiene que zanjarla adivinando.

## Decisión 2: la etiqueta miente

La segunda decisión sale de algo evidente con lo que nadie hace nada: la etiqueta de industria de tu base de datos de contactos es ficción.

He visto a una base de datos etiquetar con toda su seguridad a un fabricante industrial como "Retail". La empresa era de lo más normal y el error también: una etiqueta equivocada en una columna, y todo el mundo fiándose de ella. Esa etiqueta es metadato, y viene de un scrapeo, de un campo autodeclarado en un formulario o de un sistema de categorías diseñado hace años para los intereses de otro.

Si filtras por ella, heredas todos sus errores, y los errores de un filtro no hacen ruido: esas empresas simplemente no aparecen.

Así que el clasificador no se fía de la etiqueta y va a mirar. Lee lo que la empresa dice de sí misma ahora mismo, en la web en vivo, y cita las fuentes que usó. Las citas importan más de lo que parece, porque convierten la salida en un argumento con referencias: un comercial que no esté de acuerdo puede abrir las fuentes y auditar el razonamiento en treinta segundos.

Un sí/no a secas te pide fe; un sí/no con su razonamiento al lado es algo que puedes auditar. Solo lo segundo aguanta delante de un equipo de ventas, porque los equipos de ventas son escépticos por oficio, y hacen bien.

## Decisión 3: el criterio vive en prosa

![Paneles de documento superpuestos y apilados en secuencia de versiones sobre una retícula plana](../../assets/blog/ai-qualifier-02.webp)

El modelo de ICP vive fuera del script, en un archivo de prompt en lenguaje llano, versionado como cualquier otro documento y escrito en frases que un humano puede leer.

Dónde vive es una cuestión política, porque decide de quién es el ICP. En el momento en que tu criterio de ICP se expresa como código, el ICP pasa a manos de quien sepa editar ese código. Si marketing quiere afinar un criterio, abre un ticket y espera. La definición de a quién le vendes, que es probablemente el juicio más importante de la empresa, ahora tiene una cola delante.

Cuando está en prosa, cambiar el criterio es editar un párrafo, y quien es dueño del ICP es dueño del archivo, sin tickets, sprints ni capas de traducción entre el pensamiento y el sistema. Ese archivo ya ha pasado por varias versiones a medida que el criterio se afinaba, y cada una de esas revisiones llevó minutos. Afinar un ICP es un acto de marketing, y debería parecerse a escribir.

Si estás construyendo algo así, pon el juicio en lenguaje y deja el código tonto, para que el pensamiento lo pueda leer la persona que piensa. Es el mismo principio que hay detrás de casi todo el [trabajo de estrategia de IA](/es/services/ai-strategy) que hago: poner la decisión donde el humano adecuado pueda alcanzarla.

## Lo que cuesta, y cómo sabremos si funciona

Los números de operación no tienen ningún glamour. Cada empresa tarda entre 15 y 30 segundos y cuesta entre 0,03 € y 0,05 € (0,03 $ y 0,06 $). Un lote de unas 100 empresas se procesa en 30 a 50 minutos, por un total de entre 4,50 € y 7 € (5 $ y 8 $). Esa es toda la economía, y la pagas con el presupuesto del café.

Todavía no te puedo decir que funcione. Pusimos el listón antes de empezar, que es el único orden que tiene sentido: acuerdo por encima del 85% contra un conjunto de referencia de 64 empresas clasificadas a mano. Esa validación sigue en marcha, así que no tengo un número para ti, y si lo tuviera tan pronto deberías sospechar de él.

Te lo cuento porque la alternativa es lo que más me irrita de cómo se escribe sobre IA en marketing B2B. Alguien construye una herramienta, la describe con prosa segura, y deja que la ausencia de un listón declarado insinúe que lo superó. Lo que yo tengo es un diseño en el que creo y una prueba que no he terminado. No son lo mismo, y prefiero decirlo antes que rellenar esto con un número inventado.

Si pasa el 85%, se queda como opción por defecto, y si no, el archivo de prompt se lleva otra versión y volvemos a ejecutarlo.

## El apalancamiento no era el modelo

El modelo que usé está disponible hoy, al mismo precio, para cualquiera que lea esto, incluidos tu competidor y tu becario. No hay ventaja en el modelo, y quien te venda una te está vendiendo acceso a algo que ya tienes.

La ventaja, si hay alguna aquí, está en tres decisiones que costaron una tarde de pensar y cero talento de ingeniería. Sé permisivo, porque tus errores no son simétricos. Verifica contra el mundo, que tu base de datos te está mintiendo. Y mantén el criterio en prosa para que quien es dueño del juicio sea también dueño del archivo.

Todo eso es criterio de marketing aplicado a una herramienta que hará exactamente lo que le digas y no tiene ninguna opinión sobre si lo que le dijiste era inteligente.

---

*En The B2B Tinkerers ayudamos a equipos B2B a poner la IA donde genera apalancamiento, y a mantenerla lejos de las decisiones que necesitan un humano. Si quieres una segunda opinión sobre lo que estás construyendo, [hablemos](#contact). O mira cómo trabajamos como [fractional CMO](/es/services/fractional-cmo).*
