---
title: "How Startups Approach Static Site Builds"
created-on: "2021-03-27T00:00:00Z"
updated-on: "2021-03-31T00:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that static site builds is solved. Spend a week with startups and that consensus falls apart quickly.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
