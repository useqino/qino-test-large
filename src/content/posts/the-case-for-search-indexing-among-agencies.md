---
title: "The Case for Search Indexing Among Agencies"
created-on: "2022-01-09T22:00:00Z"
updated-on: "2022-01-30T22:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/amara-okonkwo.json"
category: "categories/markdown.json"
---

search indexing sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
