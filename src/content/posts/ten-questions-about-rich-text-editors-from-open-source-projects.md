---
title: "Ten Questions About Rich Text Editors from Open Source Projects"
created-on: "2023-12-31T14:45:00Z"
updated-on: "2024-01-07T14:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/raj-patel.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about rich text editors. It grew, because every answer raised two more questions.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

If you take one thing away, make it this: decide on purpose, and write the decision down.
