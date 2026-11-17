---
title: "Small Wins in Static Site Builds for Internal Wikis"
created-on: "2022-09-13T06:45:00Z"
updated-on: "2022-10-04T06:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/camille-laurent.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about static site builds. It grew, because every answer raised two more questions.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
