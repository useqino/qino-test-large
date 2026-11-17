---
title: "A Practical Guide to Slug Design for Large Archives"
created-on: "2021-10-14T22:15:00Z"
updated-on: "2021-11-23T22:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/yuki-sato.json"
category: "categories/tooling.json"
---

If you work with large archives, you have probably met slug design in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
