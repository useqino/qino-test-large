---
title: "Why Documentation Sites Should Care About Image Pipelines"
created-on: "2022-08-18T06:00:00Z"
updated-on: "2022-09-17T06:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/diego-moreno.json"
category: "categories/content-modeling.json"
---

If you work with documentation sites, you have probably met image pipelines in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
