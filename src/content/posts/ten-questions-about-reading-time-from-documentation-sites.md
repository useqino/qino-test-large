---
title: "Ten Questions About Reading Time from Documentation Sites"
created-on: "2021-03-28T14:00:00Z"
updated-on: "2021-05-04T14:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/amara-okonkwo.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to reading time three times last year. Here is what survived.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
