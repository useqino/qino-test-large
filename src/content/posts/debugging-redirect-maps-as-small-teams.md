---
title: "Debugging Redirect Maps as Small Teams"
created-on: "2022-11-12T23:15:00Z"
updated-on: "2022-12-31T23:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/yuki-sato.json"
category: "categories/tooling.json"
---

redirect maps sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
