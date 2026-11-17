---
title: "Small Wins in Folder Structure for Agencies"
created-on: "2022-03-08T17:45:00Z"
updated-on: "2022-04-17T17:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/yuki-sato.json"
category: "categories/performance.json"
---

If you work with agencies, you have probably met folder structure in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
