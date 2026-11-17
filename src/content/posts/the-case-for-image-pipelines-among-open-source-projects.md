---
title: "The Case for Image Pipelines Among Open Source Projects"
created-on: "2026-05-27T17:00:00Z"
updated-on: "2026-06-09T17:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/camille-laurent.json"
category: "categories/tooling.json"
---

If you work with open source projects, you have probably met image pipelines in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```bash
pnpm qino build
pnpm next build
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
