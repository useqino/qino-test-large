---
title: "Ten Questions About Editorial Workflows from Solo Developers"
created-on: "2024-04-25T06:00:00Z"
updated-on: "2024-04-27T06:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that editorial workflows is solved. Spend a week with solo developers and that consensus falls apart quickly.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
