---
title: "Flat-File Storage and the Long Tail of Personal Blogs"
created-on: "2023-07-09T18:00:00Z"
updated-on: "2023-07-23T18:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/yuki-sato.json"
category: "categories/philosophy.json"
---

flat-file storage sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
