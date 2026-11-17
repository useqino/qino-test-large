---
title: "A Practical Guide to Slug Design for Enterprises"
created-on: "2022-07-25T17:15:00Z"
updated-on: "2022-08-14T17:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/hanna-voss.json"
category: "categories/seo.json"
---

We rebuilt our approach to slug design three times last year. Here is what survived.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Run the same checks locally and in CI.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
