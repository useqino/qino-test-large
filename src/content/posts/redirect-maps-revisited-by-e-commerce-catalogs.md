---
title: "Redirect Maps, Revisited by E-commerce Catalogs"
created-on: "2024-03-24T09:15:00Z"
updated-on: "2024-05-02T09:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/tomas-silva.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about redirect maps. It grew, because every answer raised two more questions.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

If you take one thing away, make it this: decide on purpose, and write the decision down.
