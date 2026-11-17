---
title: "Type-Safe Content, Revisited by Enterprises"
created-on: "2025-07-13T14:15:00Z"
updated-on: "2025-09-04T14:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/diego-moreno.json"
category: "categories/editorial.json"
---

There is a quiet consensus that type-safe content is solved. Spend a week with enterprises and that consensus falls apart quickly.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
