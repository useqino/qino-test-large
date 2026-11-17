---
title: "Ten Questions About Folder Structure from Enterprises"
created-on: "2023-09-07T09:00:00Z"
updated-on: "2023-10-08T09:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/hanna-voss.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about folder structure. It grew, because every answer raised two more questions.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
