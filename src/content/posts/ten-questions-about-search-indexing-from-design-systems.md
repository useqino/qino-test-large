---
title: "Ten Questions About Search Indexing from Design Systems"
created-on: "2022-06-13T23:30:00Z"
updated-on: "2022-06-25T23:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/raj-patel.json"
category: "categories/performance.json"
---

Most teams only notice search indexing once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
