---
title: "Ten Questions About Pull Request Reviews from Internal Wikis"
created-on: "2021-03-04T22:30:00Z"
updated-on: "2021-04-18T22:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that pull request reviews is solved. Spend a week with internal wikis and that consensus falls apart quickly.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
