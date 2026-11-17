---
title: "Preview Modes in Practice: A Field Report from Technical Writers"
created-on: "2026-05-22T02:30:00Z"
updated-on: "2026-06-17T02:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/lars-eriksson.json"
category: "categories/tooling.json"
---

There is a quiet consensus that preview modes is solved. Spend a week with technical writers and that consensus falls apart quickly.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
