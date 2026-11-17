---
title: "Rich Text Editors at Scale: Advice for Product Teams"
created-on: "2021-05-27T01:30:00Z"
updated-on: "2021-06-29T01:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/lars-eriksson.json"
category: "categories/content-modeling.json"
---

rich text editors sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
