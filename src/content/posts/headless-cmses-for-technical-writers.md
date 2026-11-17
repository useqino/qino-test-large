---
title: "Headless CMSes for Technical Writers"
created-on: "2022-02-27T02:30:00Z"
updated-on: "2022-04-18T02:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/raj-patel.json"
category: "categories/architecture.json"
---

We rebuilt our approach to headless cmses three times last year. Here is what survived.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
