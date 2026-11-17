---
title: "A Checklist for Headless CMSes Aimed at Documentation Sites"
created-on: "2022-01-06T05:00:00Z"
updated-on: "2022-02-05T05:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/mei-tanaka.json"
category: "categories/architecture.json"
---

If you work with documentation sites, you have probably met headless cmses in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

If you take one thing away, make it this: decide on purpose, and write the decision down.
