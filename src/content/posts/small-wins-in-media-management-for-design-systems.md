---
title: "Small Wins in Media Management for Design Systems"
created-on: "2022-02-28T13:45:00Z"
updated-on: "2022-03-13T13:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/yuki-sato.json"
category: "categories/philosophy.json"
---

media management sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```bash
pnpm qino build
pnpm next build
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
