---
title: "A Checklist for Image Pipelines Aimed at Internal Wikis"
created-on: "2022-08-23T23:15:00Z"
updated-on: "2022-09-18T23:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/camille-laurent.json"
category: "categories/tooling.json"
---

image pipelines sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
