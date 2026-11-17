---
title: "What Large Archives Get Wrong About Open Graph Tags"
created-on: "2023-07-18T13:15:00Z"
updated-on: "2023-09-01T13:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/tomas-silva.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that open graph tags is solved. Spend a week with large archives and that consensus falls apart quickly.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
