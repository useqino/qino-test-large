---
title: "Git-Based Publishing: Lessons from Technical Writers"
created-on: "2022-09-24T17:15:00Z"
updated-on: "2022-10-23T17:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/amara-okonkwo.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about git-based publishing. It grew, because every answer raised two more questions.

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
