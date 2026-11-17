---
title: "The Hidden Cost of Editorial Workflows for Open Source Projects"
created-on: "2021-10-25T19:15:00Z"
updated-on: "2021-12-18T19:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/camille-laurent.json"
category: "categories/markdown.json"
---

There is a quiet consensus that editorial workflows is solved. Spend a week with open source projects and that consensus falls apart quickly.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.

If you take one thing away, make it this: decide on purpose, and write the decision down.
