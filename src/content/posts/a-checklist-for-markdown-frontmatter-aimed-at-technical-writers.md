---
title: "A Checklist for Markdown Frontmatter Aimed at Technical Writers"
created-on: "2025-02-15T05:00:00Z"
updated-on: "2025-03-05T05:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/priya-krishnan.json"
category: "categories/performance.json"
---

markdown frontmatter sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
