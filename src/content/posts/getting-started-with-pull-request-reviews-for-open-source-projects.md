---
title: "Getting Started with Pull Request Reviews for Open Source Projects"
created-on: "2023-08-07T01:15:00Z"
updated-on: "2023-08-07T01:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/yuki-sato.json"
category: "categories/content-modeling.json"
---

pull request reviews sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
