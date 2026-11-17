---
title: "Common Mistakes in Localization Made by Course Platforms"
created-on: "2026-03-05T21:00:00Z"
updated-on: "2026-04-30T21:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/camille-laurent.json"
category: "categories/content-modeling.json"
---

localization sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
