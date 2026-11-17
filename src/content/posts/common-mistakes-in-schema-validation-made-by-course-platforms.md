---
title: "Common Mistakes in Schema Validation Made by Course Platforms"
created-on: "2024-03-14T09:45:00Z"
updated-on: "2024-03-14T09:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/camille-laurent.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about schema validation. It grew, because every answer raised two more questions.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
