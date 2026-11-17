---
title: "Content Audits for Internal Wikis"
created-on: "2023-01-16T21:30:00Z"
updated-on: "2023-01-23T21:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/hanna-voss.json"
category: "categories/type-safety.json"
---

content audits sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
