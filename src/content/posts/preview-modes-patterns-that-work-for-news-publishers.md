---
title: "Preview Modes Patterns That Work for News Publishers"
created-on: "2021-03-20T14:15:00Z"
updated-on: "2021-04-24T14:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

preview modes sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Make the default path the correct one for editors.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

If you take one thing away, make it this: decide on purpose, and write the decision down.
