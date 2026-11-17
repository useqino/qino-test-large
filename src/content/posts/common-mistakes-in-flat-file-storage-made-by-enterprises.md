---
title: "Common Mistakes in Flat-File Storage Made by Enterprises"
created-on: "2020-12-23T16:00:00Z"
updated-on: "2021-01-29T16:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/diego-moreno.json"
category: "categories/seo.json"
---

If you work with enterprises, you have probably met flat-file storage in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
