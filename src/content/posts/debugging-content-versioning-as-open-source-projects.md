---
title: "Debugging Content Versioning as Open Source Projects"
created-on: "2026-08-17T10:15:00Z"
updated-on: "2026-09-29T10:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/yuki-sato.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about content versioning. It grew, because every answer raised two more questions.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
