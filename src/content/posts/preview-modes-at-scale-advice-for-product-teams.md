---
title: "Preview Modes at Scale: Advice for Product Teams"
created-on: "2022-09-03T20:00:00Z"
updated-on: "2022-10-27T20:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about preview modes. It grew, because every answer raised two more questions.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
