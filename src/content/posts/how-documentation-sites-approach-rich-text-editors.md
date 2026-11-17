---
title: "How Documentation Sites Approach Rich Text Editors"
created-on: "2022-02-06T00:30:00Z"
updated-on: "2022-02-13T00:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/lars-eriksson.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about rich text editors. It grew, because every answer raised two more questions.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
