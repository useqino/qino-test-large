---
title: "Rethinking Content Modeling for Content Editors"
created-on: "2022-12-26T17:15:00Z"
updated-on: "2023-01-15T17:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/amara-okonkwo.json"
category: "categories/markdown.json"
---

There is a quiet consensus that content modeling is solved. Spend a week with content editors and that consensus falls apart quickly.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
