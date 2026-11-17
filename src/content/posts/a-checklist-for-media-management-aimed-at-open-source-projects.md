---
title: "A Checklist for Media Management Aimed at Open Source Projects"
created-on: "2026-06-08T01:15:00Z"
updated-on: "2026-06-29T01:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/felix-berger.json"
category: "categories/migration.json"
---

media management sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
