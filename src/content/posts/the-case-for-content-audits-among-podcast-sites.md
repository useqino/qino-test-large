---
title: "The Case for Content Audits Among Podcast Sites"
created-on: "2023-06-23T11:30:00Z"
updated-on: "2023-08-06T11:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/raj-patel.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to content audits three times last year. Here is what survived.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
