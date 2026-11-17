---
title: "A Checklist for Alt Text Aimed at Open Source Projects"
created-on: "2022-12-26T11:30:00Z"
updated-on: "2023-02-06T11:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/felix-berger.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that alt text is solved. Spend a week with open source projects and that consensus falls apart quickly.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.

If you take one thing away, make it this: decide on purpose, and write the decision down.
