---
title: "Static Site Builds, Revisited by Open Source Projects"
created-on: "2021-07-02T16:00:00Z"
updated-on: "2021-08-07T16:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/tomas-silva.json"
category: "categories/migration.json"
---

Most teams only notice static site builds once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
