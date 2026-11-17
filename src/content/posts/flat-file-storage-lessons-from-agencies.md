---
title: "Flat-File Storage: Lessons from Agencies"
created-on: "2022-02-12T14:15:00Z"
updated-on: "2022-02-17T14:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/amara-okonkwo.json"
category: "categories/migration.json"
---

There is a quiet consensus that flat-file storage is solved. Spend a week with agencies and that consensus falls apart quickly.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
