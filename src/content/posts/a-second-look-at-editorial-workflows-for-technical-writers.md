---
title: "A Second Look at Editorial Workflows for Technical Writers"
created-on: "2022-07-25T00:15:00Z"
updated-on: "2022-08-17T00:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/priya-krishnan.json"
category: "categories/seo.json"
---

editorial workflows sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
