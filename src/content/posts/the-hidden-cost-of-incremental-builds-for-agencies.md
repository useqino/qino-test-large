---
title: "The Hidden Cost of Incremental Builds for Agencies"
created-on: "2022-08-16T16:00:00Z"
updated-on: "2022-10-11T16:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/felix-berger.json"
category: "categories/tooling.json"
---

We rebuilt our approach to incremental builds three times last year. Here is what survived.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
