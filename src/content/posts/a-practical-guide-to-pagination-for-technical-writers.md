---
title: "A Practical Guide to Pagination for Technical Writers"
created-on: "2022-06-10T16:45:00Z"
updated-on: "2022-07-30T16:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/camille-laurent.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to pagination three times last year. Here is what survived.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
