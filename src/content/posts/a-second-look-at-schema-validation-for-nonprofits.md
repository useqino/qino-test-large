---
title: "A Second Look at Schema Validation for Nonprofits"
created-on: "2022-05-05T12:15:00Z"
updated-on: "2022-05-27T12:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/amara-okonkwo.json"
category: "categories/philosophy.json"
---

schema validation sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.

If you take one thing away, make it this: decide on purpose, and write the decision down.
