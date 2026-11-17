---
title: "Notes on Headless CMSes for Design Systems"
created-on: "2024-11-18T16:00:00Z"
updated-on: "2024-12-13T16:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/diego-moreno.json"
category: "categories/performance.json"
---

headless cmses sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

If you take one thing away, make it this: decide on purpose, and write the decision down.
