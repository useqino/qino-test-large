---
title: "What Internal Wikis Get Wrong About Slug Design"
created-on: "2022-11-25T11:00:00Z"
updated-on: "2023-01-11T11:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/mei-tanaka.json"
category: "categories/seo.json"
---

This post started as a short note to a colleague about slug design. It grew, because every answer raised two more questions.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```bash
pnpm qino build
pnpm next build
```

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
