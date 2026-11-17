---
title: "How Documentation Sites Approach Flat-File Storage"
created-on: "2021-03-29T05:45:00Z"
updated-on: "2021-04-11T05:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/diego-moreno.json"
category: "categories/content-modeling.json"
---

flat-file storage sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

If you take one thing away, make it this: decide on purpose, and write the decision down.
