---
title: "Debugging Media Management as Open Source Projects"
created-on: "2021-05-12T16:15:00Z"
updated-on: "2021-06-02T16:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about media management. It grew, because every answer raised two more questions.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

If you take one thing away, make it this: decide on purpose, and write the decision down.
