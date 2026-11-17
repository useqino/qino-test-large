---
title: "Content Audits at Scale: Advice for Solo Developers"
created-on: "2022-02-18T09:15:00Z"
updated-on: "2022-04-02T09:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/lars-eriksson.json"
category: "categories/seo.json"
---

This post started as a short note to a colleague about content audits. It grew, because every answer raised two more questions.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
