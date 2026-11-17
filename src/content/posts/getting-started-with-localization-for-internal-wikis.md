---
title: "Getting Started with Localization for Internal Wikis"
created-on: "2024-06-10T06:30:00Z"
updated-on: "2024-07-25T06:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/yuki-sato.json"
category: "categories/philosophy.json"
---

localization sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

If you take one thing away, make it this: decide on purpose, and write the decision down.
