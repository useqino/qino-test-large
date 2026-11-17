---
title: "Debugging Redirect Maps as Product Teams"
created-on: "2024-02-16T06:15:00Z"
updated-on: "2024-02-29T06:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/felix-berger.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about redirect maps. It grew, because every answer raised two more questions.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
