---
title: "Link Checking in Practice: A Field Report from Agencies"
created-on: "2022-07-08T07:15:00Z"
updated-on: "2022-07-20T07:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/priya-krishnan.json"
category: "categories/migration.json"
---

link checking sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
