---
title: "What Internal Wikis Get Wrong About Taxonomies"
created-on: "2026-07-14T18:00:00Z"
updated-on: "2026-07-25T18:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/priya-krishnan.json"
category: "categories/markdown.json"
---

This post started as a short note to a colleague about taxonomies. It grew, because every answer raised two more questions.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
