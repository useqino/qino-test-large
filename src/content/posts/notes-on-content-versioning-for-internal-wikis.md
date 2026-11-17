---
title: "Notes on Content Versioning for Internal Wikis"
created-on: "2023-08-13T19:30:00Z"
updated-on: "2023-09-12T19:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/diego-moreno.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to content versioning three times last year. Here is what survived.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
