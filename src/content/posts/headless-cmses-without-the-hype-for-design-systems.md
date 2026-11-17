---
title: "Headless CMSes Without the Hype, for Design Systems"
created-on: "2022-01-18T02:15:00Z"
updated-on: "2022-01-25T02:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/tomas-silva.json"
category: "categories/architecture.json"
---

We rebuilt our approach to headless cmses three times last year. Here is what survived.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.

If you take one thing away, make it this: decide on purpose, and write the decision down.
