---
title: "Teaching Content Audits to Large Archives"
created-on: "2024-08-22T19:45:00Z"
updated-on: "2024-10-08T19:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/felix-berger.json"
category: "categories/architecture.json"
---

If you work with large archives, you have probably met content audits in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
