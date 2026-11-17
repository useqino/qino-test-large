---
title: "The Case for Image Pipelines Among Large Archives"
created-on: "2024-07-05T22:45:00Z"
updated-on: "2024-08-10T22:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/tomas-silva.json"
category: "categories/migration.json"
---

We rebuilt our approach to image pipelines three times last year. Here is what survived.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

If you take one thing away, make it this: decide on purpose, and write the decision down.
