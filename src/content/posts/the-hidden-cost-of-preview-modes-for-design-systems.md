---
title: "The Hidden Cost of Preview Modes for Design Systems"
created-on: "2021-08-03T11:30:00Z"
updated-on: "2021-08-13T11:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/mei-tanaka.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about preview modes. It grew, because every answer raised two more questions.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
