---
title: "Measuring Rich Text Editors as Enterprises"
created-on: "2024-03-29T07:45:00Z"
updated-on: "2024-05-05T07:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/hanna-voss.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about rich text editors. It grew, because every answer raised two more questions.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
