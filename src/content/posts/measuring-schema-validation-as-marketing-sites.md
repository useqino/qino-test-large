---
title: "Measuring Schema Validation as Marketing Sites"
created-on: "2024-07-07T14:15:00Z"
updated-on: "2024-07-08T14:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/raj-patel.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about schema validation. It grew, because every answer raised two more questions.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
