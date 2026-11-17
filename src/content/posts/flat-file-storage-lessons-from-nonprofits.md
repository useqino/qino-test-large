---
title: "Flat-File Storage: Lessons from Nonprofits"
created-on: "2022-07-06T13:15:00Z"
updated-on: "2022-08-13T13:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/diego-moreno.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about flat-file storage. It grew, because every answer raised two more questions.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
