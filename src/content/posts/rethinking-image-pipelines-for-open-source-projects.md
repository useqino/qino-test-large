---
title: "Rethinking Image Pipelines for Open Source Projects"
created-on: "2022-11-08T10:00:00Z"
updated-on: "2022-11-14T10:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/yuki-sato.json"
category: "categories/migration.json"
---

image pipelines sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
