---
title: "Markdown Frontmatter, Revisited by Design Systems"
created-on: "2024-02-08T07:45:00Z"
updated-on: "2024-03-18T07:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/amara-okonkwo.json"
category: "categories/markdown.json"
---

We rebuilt our approach to markdown frontmatter three times last year. Here is what survived.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
