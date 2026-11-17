---
title: "How Technical Writers Approach Content Migrations"
created-on: "2024-05-18T15:00:00Z"
updated-on: "2024-06-06T15:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/lars-eriksson.json"
category: "categories/architecture.json"
---

If you work with technical writers, you have probably met content migrations in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
