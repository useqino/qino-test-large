---
title: "Static Site Builds and the Long Tail of Internal Wikis"
created-on: "2022-03-15T23:30:00Z"
updated-on: "2022-03-26T23:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/diego-moreno.json"
category: "categories/content-modeling.json"
---

If you work with internal wikis, you have probably met static site builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
