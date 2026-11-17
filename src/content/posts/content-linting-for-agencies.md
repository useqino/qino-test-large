---
title: "Content Linting for Agencies"
created-on: "2026-07-03T06:45:00Z"
updated-on: "2026-08-29T06:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/jane-doe.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about content linting. It grew, because every answer raised two more questions.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.

If you take one thing away, make it this: decide on purpose, and write the decision down.
