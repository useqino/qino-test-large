---
title: "RSS Feeds Without the Hype, for Agencies"
created-on: "2024-04-17T14:45:00Z"
updated-on: "2024-04-22T14:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/lars-eriksson.json"
category: "categories/migration.json"
---

If you work with agencies, you have probably met rss feeds in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
