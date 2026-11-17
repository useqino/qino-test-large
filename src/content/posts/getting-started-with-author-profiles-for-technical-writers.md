---
title: "Getting Started with Author Profiles for Technical Writers"
created-on: "2024-04-14T20:45:00Z"
updated-on: "2024-06-10T20:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/camille-laurent.json"
category: "categories/editorial.json"
---

author profiles sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
