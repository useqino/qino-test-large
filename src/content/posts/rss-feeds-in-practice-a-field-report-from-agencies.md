---
title: "RSS Feeds in Practice: A Field Report from Agencies"
created-on: "2021-08-05T03:00:00Z"
updated-on: "2021-08-11T03:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/felix-berger.json"
category: "categories/tooling.json"
---

If you work with agencies, you have probably met rss feeds in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
