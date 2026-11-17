---
title: "Image Pipelines and the Long Tail of Agencies"
created-on: "2023-08-02T01:00:00Z"
updated-on: "2023-08-23T01:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/mei-tanaka.json"
category: "categories/tooling.json"
---

image pipelines sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
