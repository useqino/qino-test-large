---
title: "Measuring Type-Safe Content as Documentation Sites"
created-on: "2023-03-12T13:45:00Z"
updated-on: "2023-03-20T13:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/mei-tanaka.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that type-safe content is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.

If you take one thing away, make it this: decide on purpose, and write the decision down.
