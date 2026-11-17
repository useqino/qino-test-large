---
title: "The Case for Pull Request Reviews Among Podcast Sites"
created-on: "2022-05-06T08:15:00Z"
updated-on: "2022-06-19T08:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/yuki-sato.json"
category: "categories/architecture.json"
---

We rebuilt our approach to pull request reviews three times last year. Here is what survived.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
