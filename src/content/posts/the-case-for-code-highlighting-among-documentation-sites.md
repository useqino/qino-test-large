---
title: "The Case for Code Highlighting Among Documentation Sites"
created-on: "2022-10-07T05:00:00Z"
updated-on: "2022-11-07T05:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/felix-berger.json"
category: "categories/markdown.json"
---

There is a quiet consensus that code highlighting is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
