---
title: "Alt Text, Revisited by Podcast Sites"
created-on: "2026-01-02T03:00:00Z"
updated-on: "2026-01-17T03:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/jane-doe.json"
category: "categories/content-modeling.json"
---

If you work with podcast sites, you have probably met alt text in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
