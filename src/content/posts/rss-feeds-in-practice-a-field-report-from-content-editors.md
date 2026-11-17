---
title: "RSS Feeds in Practice: A Field Report from Content Editors"
created-on: "2021-01-20T09:00:00Z"
updated-on: "2021-02-01T09:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/raj-patel.json"
category: "categories/markdown.json"
---

If you work with content editors, you have probably met rss feeds in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
