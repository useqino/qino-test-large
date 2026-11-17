---
title: "The Case for Build Caching Among Technical Writers"
created-on: "2022-07-14T03:00:00Z"
updated-on: "2022-08-07T03:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/raj-patel.json"
category: "categories/performance.json"
---

If you work with technical writers, you have probably met build caching in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.

If you take one thing away, make it this: decide on purpose, and write the decision down.
