---
title: "Structured Data Without the Hype, for Agencies"
created-on: "2020-12-16T00:00:00Z"
updated-on: "2021-01-25T00:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/lars-eriksson.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about structured data. It grew, because every answer raised two more questions.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
