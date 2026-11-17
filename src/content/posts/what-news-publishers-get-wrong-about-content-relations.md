---
title: "What News Publishers Get Wrong About Content Relations"
created-on: "2024-07-08T04:45:00Z"
updated-on: "2024-08-08T04:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/tomas-silva.json"
category: "categories/editorial.json"
---

content relations sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Where it goes wrong

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

If you take one thing away, make it this: decide on purpose, and write the decision down.
