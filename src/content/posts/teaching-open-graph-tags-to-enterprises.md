---
title: "Teaching Open Graph Tags to Enterprises"
created-on: "2024-03-08T23:30:00Z"
updated-on: "2024-03-13T23:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/yuki-sato.json"
category: "categories/markdown.json"
---

open graph tags sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
