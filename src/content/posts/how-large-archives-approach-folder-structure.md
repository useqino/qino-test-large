---
title: "How Large Archives Approach Folder Structure"
created-on: "2026-05-07T17:00:00Z"
updated-on: "2026-06-23T17:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/raj-patel.json"
category: "categories/editorial.json"
---

If you work with large archives, you have probably met folder structure in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
