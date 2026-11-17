---
title: "Teaching Type-Safe Content to Solo Developers"
created-on: "2025-04-29T01:00:00Z"
updated-on: "2025-06-25T01:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/camille-laurent.json"
category: "categories/performance.json"
---

We rebuilt our approach to type-safe content three times last year. Here is what survived.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
