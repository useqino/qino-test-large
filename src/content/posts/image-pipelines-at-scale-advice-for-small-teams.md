---
title: "Image Pipelines at Scale: Advice for Small Teams"
created-on: "2022-04-24T03:30:00Z"
updated-on: "2022-05-13T03:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/yuki-sato.json"
category: "categories/markdown.json"
---

If you work with small teams, you have probably met image pipelines in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
