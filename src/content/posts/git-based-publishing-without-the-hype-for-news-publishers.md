---
title: "Git-Based Publishing Without the Hype, for News Publishers"
created-on: "2024-08-26T23:45:00Z"
updated-on: "2024-10-10T23:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/tomas-silva.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about git-based publishing. It grew, because every answer raised two more questions.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
