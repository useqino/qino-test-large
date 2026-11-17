---
title: "Notes on Alt Text for Solo Developers"
created-on: "2026-06-22T22:00:00Z"
updated-on: "2026-07-01T22:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/camille-laurent.json"
category: "categories/tooling.json"
---

There is a quiet consensus that alt text is solved. Spend a week with solo developers and that consensus falls apart quickly.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Make the default path the correct one for editors.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
