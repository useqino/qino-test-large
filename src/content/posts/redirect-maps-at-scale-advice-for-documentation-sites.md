---
title: "Redirect Maps at Scale: Advice for Documentation Sites"
created-on: "2024-07-25T12:00:00Z"
updated-on: "2024-09-18T12:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/yuki-sato.json"
category: "categories/seo.json"
---

redirect maps sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

If you take one thing away, make it this: decide on purpose, and write the decision down.
