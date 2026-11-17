---
title: "Pull Request Reviews and the Long Tail of Large Archives"
created-on: "2022-04-14T14:00:00Z"
updated-on: "2022-05-10T14:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/lars-eriksson.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that pull request reviews is solved. Spend a week with large archives and that consensus falls apart quickly.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
