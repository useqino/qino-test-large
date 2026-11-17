---
title: "Link Checking, Revisited by Technical Writers"
created-on: "2022-01-29T07:30:00Z"
updated-on: "2022-03-09T07:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/yuki-sato.json"
category: "categories/type-safety.json"
---

link checking sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
