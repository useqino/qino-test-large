---
title: "Rethinking Static Site Builds for Startups"
created-on: "2021-07-27T20:00:00Z"
updated-on: "2021-08-27T20:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/priya-krishnan.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about static site builds. It grew, because every answer raised two more questions.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
