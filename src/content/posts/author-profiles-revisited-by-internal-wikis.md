---
title: "Author Profiles, Revisited by Internal Wikis"
created-on: "2023-12-03T10:30:00Z"
updated-on: "2023-12-18T10:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/priya-krishnan.json"
category: "categories/migration.json"
---

If you work with internal wikis, you have probably met author profiles in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
