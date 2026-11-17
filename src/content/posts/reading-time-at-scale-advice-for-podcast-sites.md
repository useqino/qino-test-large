---
title: "Reading Time at Scale: Advice for Podcast Sites"
created-on: "2021-09-05T08:00:00Z"
updated-on: "2021-09-29T08:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/type-safety.json"
---

reading time sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
