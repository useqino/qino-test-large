---
title: "Teaching Content Linting to Course Platforms"
created-on: "2021-02-05T17:00:00Z"
updated-on: "2021-02-17T17:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/raj-patel.json"
category: "categories/seo.json"
---

We rebuilt our approach to content linting three times last year. Here is what survived.

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
