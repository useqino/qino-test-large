---
title: "Content Audits at Scale: Advice for Agencies"
created-on: "2023-04-09T00:45:00Z"
updated-on: "2023-05-22T00:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/mei-tanaka.json"
category: "categories/philosophy.json"
---

If you work with agencies, you have probably met content audits in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
