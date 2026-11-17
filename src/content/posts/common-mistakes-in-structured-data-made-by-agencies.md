---
title: "Common Mistakes in Structured Data Made by Agencies"
created-on: "2024-12-09T14:45:00Z"
updated-on: "2025-01-06T14:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/diego-moreno.json"
category: "categories/markdown.json"
---

Most teams only notice structured data once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
