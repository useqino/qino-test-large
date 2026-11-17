---
title: "What Large Archives Get Wrong About Pagination"
created-on: "2023-11-26T10:30:00Z"
updated-on: "2023-12-22T10:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/tomas-silva.json"
category: "categories/tooling.json"
---

There is a quiet consensus that pagination is solved. Spend a week with large archives and that consensus falls apart quickly.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

If you take one thing away, make it this: decide on purpose, and write the decision down.
