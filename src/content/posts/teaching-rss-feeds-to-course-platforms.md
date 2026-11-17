---
title: "Teaching RSS Feeds to Course Platforms"
created-on: "2025-09-28T18:45:00Z"
updated-on: "2025-10-18T18:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/mei-tanaka.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about rss feeds. It grew, because every answer raised two more questions.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
