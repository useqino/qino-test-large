---
title: "Notes on Content Migrations for Enterprises"
created-on: "2022-10-08T01:45:00Z"
updated-on: "2022-10-18T01:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/camille-laurent.json"
category: "categories/markdown.json"
---

This post started as a short note to a colleague about content migrations. It grew, because every answer raised two more questions.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
