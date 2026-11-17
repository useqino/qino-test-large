---
title: "Slug Design in Practice: A Field Report from Content Editors"
created-on: "2025-08-08T03:30:00Z"
updated-on: "2025-09-21T03:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/diego-moreno.json"
category: "categories/type-safety.json"
---

If you work with content editors, you have probably met slug design in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
