---
title: "A Second Look at Folder Structure for Podcast Sites"
created-on: "2023-09-09T00:00:00Z"
updated-on: "2023-10-29T00:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/felix-berger.json"
category: "categories/type-safety.json"
---

If you work with podcast sites, you have probably met folder structure in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

If you take one thing away, make it this: decide on purpose, and write the decision down.
