---
title: "Hot Reloading in Practice: A Field Report from Open Source Projects"
created-on: "2022-05-17T04:00:00Z"
updated-on: "2022-06-23T04:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/raj-patel.json"
category: "categories/editorial.json"
---

There is a quiet consensus that hot reloading is solved. Spend a week with open source projects and that consensus falls apart quickly.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
