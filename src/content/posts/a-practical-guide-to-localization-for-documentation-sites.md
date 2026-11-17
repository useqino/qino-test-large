---
title: "A Practical Guide to Localization for Documentation Sites"
created-on: "2025-04-05T14:00:00Z"
updated-on: "2025-05-20T14:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/felix-berger.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about localization. It grew, because every answer raised two more questions.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
