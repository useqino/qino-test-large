---
title: "Measuring Content Modeling as Internal Wikis"
created-on: "2022-03-29T20:30:00Z"
updated-on: "2022-04-12T20:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/camille-laurent.json"
category: "categories/tooling.json"
---

We rebuilt our approach to content modeling three times last year. Here is what survived.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
