---
title: "Link Checking for Large Archives"
created-on: "2021-05-30T10:00:00Z"
updated-on: "2021-07-06T10:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/felix-berger.json"
category: "categories/markdown.json"
---

If you work with large archives, you have probably met link checking in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

If you take one thing away, make it this: decide on purpose, and write the decision down.
