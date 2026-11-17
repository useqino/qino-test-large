---
title: "A Second Look at Content Relations for Solo Developers"
created-on: "2026-09-11T08:15:00Z"
updated-on: "2026-10-15T08:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/hanna-voss.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that content relations is solved. Spend a week with solo developers and that consensus falls apart quickly.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
