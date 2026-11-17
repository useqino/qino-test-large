---
title: "Localization Patterns That Work for Internal Wikis"
created-on: "2022-08-23T02:00:00Z"
updated-on: "2022-10-12T02:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

If you work with internal wikis, you have probably met localization in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
