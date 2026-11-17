---
title: "Common Mistakes in Flat-File Storage Made by Product Teams"
created-on: "2025-12-09T16:00:00Z"
updated-on: "2026-01-17T16:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/felix-berger.json"
category: "categories/type-safety.json"
---

flat-file storage sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
