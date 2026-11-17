---
title: "A Practical Guide to Markdown Frontmatter for Large Archives"
created-on: "2025-07-28T11:30:00Z"
updated-on: "2025-08-21T11:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/felix-berger.json"
category: "categories/markdown.json"
---

There is a quiet consensus that markdown frontmatter is solved. Spend a week with large archives and that consensus falls apart quickly.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
