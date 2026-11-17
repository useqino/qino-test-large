---
title: "Ten Questions About Hot Reloading from Internal Wikis"
created-on: "2022-12-18T19:00:00Z"
updated-on: "2022-12-23T19:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/mei-tanaka.json"
category: "categories/tooling.json"
---

hot reloading sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
