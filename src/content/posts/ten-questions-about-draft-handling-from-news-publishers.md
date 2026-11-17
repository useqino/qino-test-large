---
title: "Ten Questions About Draft Handling from News Publishers"
created-on: "2021-06-23T20:30:00Z"
updated-on: "2021-08-06T20:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/lars-eriksson.json"
category: "categories/tooling.json"
---

Most teams only notice draft handling once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
