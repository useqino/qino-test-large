---
title: "A Second Look at Schema Validation for Open Source Projects"
created-on: "2026-07-23T06:45:00Z"
updated-on: "2026-08-20T06:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/hanna-voss.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that schema validation is solved. Spend a week with open source projects and that consensus falls apart quickly.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
