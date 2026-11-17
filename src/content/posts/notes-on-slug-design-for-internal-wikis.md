---
title: "Notes on Slug Design for Internal Wikis"
created-on: "2023-05-21T00:00:00Z"
updated-on: "2023-06-18T00:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/tomas-silva.json"
category: "categories/philosophy.json"
---

slug design sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.

If you take one thing away, make it this: decide on purpose, and write the decision down.
