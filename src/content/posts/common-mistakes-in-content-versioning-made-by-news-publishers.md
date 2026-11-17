---
title: "Common Mistakes in Content Versioning Made by News Publishers"
created-on: "2026-03-27T19:00:00Z"
updated-on: "2026-05-13T19:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/camille-laurent.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about content versioning. It grew, because every answer raised two more questions.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
