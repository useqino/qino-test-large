---
title: "Localization and the Long Tail of Personal Blogs"
created-on: "2023-07-23T07:00:00Z"
updated-on: "2023-08-01T07:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/yuki-sato.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about localization. It grew, because every answer raised two more questions.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
