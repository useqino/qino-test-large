---
title: "Search Indexing: Lessons from Content Editors"
created-on: "2024-05-17T02:30:00Z"
updated-on: "2024-07-05T02:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/raj-patel.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about search indexing. It grew, because every answer raised two more questions.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
