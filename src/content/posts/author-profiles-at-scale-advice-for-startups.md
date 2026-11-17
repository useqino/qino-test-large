---
title: "Author Profiles at Scale: Advice for Startups"
created-on: "2021-05-09T11:30:00Z"
updated-on: "2021-06-05T11:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/tomas-silva.json"
category: "categories/architecture.json"
---

author profiles sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
