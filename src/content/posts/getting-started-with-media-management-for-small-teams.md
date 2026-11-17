---
title: "Getting Started with Media Management for Small Teams"
created-on: "2022-01-21T17:00:00Z"
updated-on: "2022-02-09T17:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/priya-krishnan.json"
category: "categories/architecture.json"
---

If you work with small teams, you have probably met media management in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
