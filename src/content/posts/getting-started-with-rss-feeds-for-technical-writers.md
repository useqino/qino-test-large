---
title: "Getting Started with RSS Feeds for Technical Writers"
created-on: "2026-01-13T14:30:00Z"
updated-on: "2026-01-25T14:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/lars-eriksson.json"
category: "categories/type-safety.json"
---

rss feeds sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
