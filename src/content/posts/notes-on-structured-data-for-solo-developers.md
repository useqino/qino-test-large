---
title: "Notes on Structured Data for Solo Developers"
created-on: "2023-12-13T06:00:00Z"
updated-on: "2023-12-23T06:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/hanna-voss.json"
category: "categories/tooling.json"
---

There is a quiet consensus that structured data is solved. Spend a week with solo developers and that consensus falls apart quickly.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
