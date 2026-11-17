---
title: "Reading Time in Practice: A Field Report from Nonprofits"
created-on: "2022-01-10T19:45:00Z"
updated-on: "2022-03-06T19:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/tomas-silva.json"
category: "categories/seo.json"
---

If you work with nonprofits, you have probably met reading time in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
