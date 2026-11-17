---
title: "Alt Text at Scale: Advice for Product Teams"
created-on: "2025-09-18T00:15:00Z"
updated-on: "2025-10-21T00:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/yuki-sato.json"
category: "categories/philosophy.json"
---

If you work with product teams, you have probably met alt text in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
