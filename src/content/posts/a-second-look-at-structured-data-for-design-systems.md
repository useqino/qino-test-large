---
title: "A Second Look at Structured Data for Design Systems"
created-on: "2026-10-04T01:15:00Z"
updated-on: "2026-10-27T01:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/camille-laurent.json"
category: "categories/editorial.json"
---

structured data sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.

If you take one thing away, make it this: decide on purpose, and write the decision down.
