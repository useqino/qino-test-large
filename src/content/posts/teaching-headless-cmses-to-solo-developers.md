---
title: "Teaching Headless CMSes to Solo Developers"
created-on: "2023-03-01T07:30:00Z"
updated-on: "2023-04-24T07:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/jane-doe.json"
category: "categories/philosophy.json"
---

headless cmses sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
