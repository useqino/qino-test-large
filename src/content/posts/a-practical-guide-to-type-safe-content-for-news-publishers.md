---
title: "A Practical Guide to Type-Safe Content for News Publishers"
created-on: "2022-09-02T19:00:00Z"
updated-on: "2022-10-23T19:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/hanna-voss.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to type-safe content three times last year. Here is what survived.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

If you take one thing away, make it this: decide on purpose, and write the decision down.
