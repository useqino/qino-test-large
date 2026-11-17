---
title: "Getting Started with RSS Feeds for Podcast Sites"
created-on: "2023-11-13T06:30:00Z"
updated-on: "2023-12-12T06:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/priya-krishnan.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about rss feeds. It grew, because every answer raised two more questions.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
