---
title: "What Podcast Sites Get Wrong About Markdown Frontmatter"
created-on: "2022-02-24T07:30:00Z"
updated-on: "2022-04-20T07:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/yuki-sato.json"
category: "categories/seo.json"
---

markdown frontmatter sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

If you take one thing away, make it this: decide on purpose, and write the decision down.
