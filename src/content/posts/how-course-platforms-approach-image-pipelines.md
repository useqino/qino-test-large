---
title: "How Course Platforms Approach Image Pipelines"
created-on: "2026-07-22T05:15:00Z"
updated-on: "2026-09-02T05:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/amara-okonkwo.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about image pipelines. It grew, because every answer raised two more questions.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```bash
pnpm qino build
pnpm next build
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
