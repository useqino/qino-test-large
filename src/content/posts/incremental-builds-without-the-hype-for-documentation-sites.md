---
title: "Incremental Builds Without the Hype, for Documentation Sites"
created-on: "2020-12-03T22:00:00Z"
updated-on: "2021-01-27T22:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/diego-moreno.json"
category: "categories/architecture.json"
---

incremental builds sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
