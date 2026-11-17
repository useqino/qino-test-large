---
title: "Common Mistakes in Flat-File Storage Made by Open Source Projects"
created-on: "2021-12-19T09:15:00Z"
updated-on: "2022-02-08T09:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/yuki-sato.json"
category: "categories/performance.json"
---

flat-file storage sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

If you take one thing away, make it this: decide on purpose, and write the decision down.
