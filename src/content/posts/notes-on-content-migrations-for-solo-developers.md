---
title: "Notes on Content Migrations for Solo Developers"
created-on: "2022-07-03T04:00:00Z"
updated-on: "2022-07-24T04:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to content migrations three times last year. Here is what survived.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
