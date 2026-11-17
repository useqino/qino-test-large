---
title: "Hot Reloading at Scale: Advice for Marketing Sites"
created-on: "2024-02-12T18:15:00Z"
updated-on: "2024-03-25T18:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/diego-moreno.json"
category: "categories/tooling.json"
---

If you work with marketing sites, you have probably met hot reloading in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
