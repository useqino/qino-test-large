---
title: "Getting Started with Sitemaps for Course Platforms"
created-on: "2025-11-25T18:30:00Z"
updated-on: "2025-12-18T18:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/amara-okonkwo.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to sitemaps three times last year. Here is what survived.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
