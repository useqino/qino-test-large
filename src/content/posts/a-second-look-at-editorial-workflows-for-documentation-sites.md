---
title: "A Second Look at Editorial Workflows for Documentation Sites"
created-on: "2025-10-16T17:45:00Z"
updated-on: "2025-12-13T17:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/yuki-sato.json"
category: "categories/editorial.json"
---

There is a quiet consensus that editorial workflows is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## Where it goes wrong

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
