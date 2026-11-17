---
title: "Image Pipelines: Lessons from Solo Developers"
created-on: "2026-06-23T08:45:00Z"
updated-on: "2026-08-14T08:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/hanna-voss.json"
category: "categories/editorial.json"
---

There is a quiet consensus that image pipelines is solved. Spend a week with solo developers and that consensus falls apart quickly.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
