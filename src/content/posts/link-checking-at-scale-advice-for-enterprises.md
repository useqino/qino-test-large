---
title: "Link Checking at Scale: Advice for Enterprises"
created-on: "2023-10-29T14:30:00Z"
updated-on: "2023-11-12T14:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/felix-berger.json"
category: "categories/philosophy.json"
---

We rebuilt our approach to link checking three times last year. Here is what survived.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
