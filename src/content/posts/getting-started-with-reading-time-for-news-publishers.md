---
title: "Getting Started with Reading Time for News Publishers"
created-on: "2021-04-08T10:15:00Z"
updated-on: "2021-04-29T10:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/felix-berger.json"
category: "categories/performance.json"
---

Most teams only notice reading time once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
