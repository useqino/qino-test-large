---
title: "How Agencies Approach Preview Modes"
created-on: "2026-04-18T21:30:00Z"
updated-on: "2026-05-07T21:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/jane-doe.json"
category: "categories/markdown.json"
---

This post started as a short note to a colleague about preview modes. It grew, because every answer raised two more questions.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
