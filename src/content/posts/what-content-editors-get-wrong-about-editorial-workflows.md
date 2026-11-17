---
title: "What Content Editors Get Wrong About Editorial Workflows"
created-on: "2021-02-09T11:15:00Z"
updated-on: "2021-03-04T11:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/priya-krishnan.json"
category: "categories/markdown.json"
---

editorial workflows sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
