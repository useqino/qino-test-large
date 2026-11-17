---
title: "Headless CMSes: Lessons from Design Systems"
created-on: "2025-12-25T00:30:00Z"
updated-on: "2026-02-06T00:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/tomas-silva.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about headless cmses. It grew, because every answer raised two more questions.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

If you take one thing away, make it this: decide on purpose, and write the decision down.
