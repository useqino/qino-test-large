---
title: "Measuring Editorial Workflows as Open Source Projects"
created-on: "2022-06-29T22:30:00Z"
updated-on: "2022-08-04T22:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/camille-laurent.json"
category: "categories/philosophy.json"
---

editorial workflows sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
