---
title: "How Design Systems Approach Localization"
created-on: "2022-03-05T03:45:00Z"
updated-on: "2022-03-27T03:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/lars-eriksson.json"
category: "categories/markdown.json"
---

localization sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.

If you take one thing away, make it this: decide on purpose, and write the decision down.
