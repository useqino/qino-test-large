---
title: "What Nonprofits Get Wrong About Pull Request Reviews"
created-on: "2021-03-31T09:15:00Z"
updated-on: "2021-04-05T09:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/camille-laurent.json"
category: "categories/editorial.json"
---

pull request reviews sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
