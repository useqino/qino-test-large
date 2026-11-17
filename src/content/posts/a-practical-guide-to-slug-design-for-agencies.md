---
title: "A Practical Guide to Slug Design for Agencies"
created-on: "2020-12-28T11:30:00Z"
updated-on: "2021-01-19T11:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/jane-doe.json"
category: "categories/philosophy.json"
---

If you work with agencies, you have probably met slug design in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
