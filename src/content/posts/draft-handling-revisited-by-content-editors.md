---
title: "Draft Handling, Revisited by Content Editors"
created-on: "2025-12-22T02:00:00Z"
updated-on: "2026-02-13T02:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/yuki-sato.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about draft handling. It grew, because every answer raised two more questions.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.

If you take one thing away, make it this: decide on purpose, and write the decision down.
