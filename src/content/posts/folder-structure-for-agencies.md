---
title: "Folder Structure for Agencies"
created-on: "2022-08-11T04:30:00Z"
updated-on: "2022-08-18T04:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/philosophy.json"
---

folder structure sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

If you take one thing away, make it this: decide on purpose, and write the decision down.
