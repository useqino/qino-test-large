---
title: "How News Publishers Approach Content Versioning"
created-on: "2021-01-26T12:30:00Z"
updated-on: "2021-03-22T12:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/jane-doe.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to content versioning three times last year. Here is what survived.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
