---
title: "Code Highlighting in Practice: A Field Report from Course Platforms"
created-on: "2022-12-10T22:15:00Z"
updated-on: "2023-01-16T22:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/tomas-silva.json"
category: "categories/migration.json"
---

code highlighting sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
