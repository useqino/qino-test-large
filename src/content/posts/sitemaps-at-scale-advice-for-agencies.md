---
title: "Sitemaps at Scale: Advice for Agencies"
created-on: "2025-09-15T20:00:00Z"
updated-on: "2025-11-02T20:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

If you work with agencies, you have probably met sitemaps in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
