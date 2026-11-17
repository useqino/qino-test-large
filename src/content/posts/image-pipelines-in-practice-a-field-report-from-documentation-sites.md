---
title: "Image Pipelines in Practice: A Field Report from Documentation Sites"
created-on: "2025-11-19T06:30:00Z"
updated-on: "2025-12-24T06:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/camille-laurent.json"
category: "categories/tooling.json"
---

If you work with documentation sites, you have probably met image pipelines in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
