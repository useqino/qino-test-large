---
title: "Folder Structure in Practice: A Field Report from Nonprofits"
created-on: "2021-12-12T08:45:00Z"
updated-on: "2022-01-19T08:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/mei-tanaka.json"
category: "categories/content-modeling.json"
---

If you work with nonprofits, you have probably met folder structure in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
