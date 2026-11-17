---
title: "Getting Started with Draft Handling for News Publishers"
created-on: "2022-01-11T18:00:00Z"
updated-on: "2022-03-10T18:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/amara-okonkwo.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about draft handling. It grew, because every answer raised two more questions.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
