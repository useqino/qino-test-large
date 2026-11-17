---
title: "Teaching Reading Time to Course Platforms"
created-on: "2022-01-31T15:45:00Z"
updated-on: "2022-03-09T15:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/mei-tanaka.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about reading time. It grew, because every answer raised two more questions.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
