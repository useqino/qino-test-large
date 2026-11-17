---
title: "Flat-File Storage at Scale: Advice for News Publishers"
created-on: "2023-08-21T22:15:00Z"
updated-on: "2023-09-18T22:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/yuki-sato.json"
category: "categories/architecture.json"
---

If you work with news publishers, you have probably met flat-file storage in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
