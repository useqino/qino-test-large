---
title: "Ten Questions About Slug Design from Startups"
created-on: "2024-05-01T08:15:00Z"
updated-on: "2024-05-05T08:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/camille-laurent.json"
category: "categories/architecture.json"
---

There is a quiet consensus that slug design is solved. Spend a week with startups and that consensus falls apart quickly.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
