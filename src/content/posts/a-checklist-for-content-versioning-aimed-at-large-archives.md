---
title: "A Checklist for Content Versioning Aimed at Large Archives"
created-on: "2022-08-26T21:00:00Z"
updated-on: "2022-09-16T21:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/felix-berger.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about content versioning. It grew, because every answer raised two more questions.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
