---
title: "Static Site Builds Patterns That Work for Marketing Sites"
created-on: "2025-06-10T03:15:00Z"
updated-on: "2025-06-24T03:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/diego-moreno.json"
category: "categories/migration.json"
---

If you work with marketing sites, you have probably met static site builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
