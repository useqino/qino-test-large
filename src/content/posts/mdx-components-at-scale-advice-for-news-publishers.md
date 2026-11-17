---
title: "MDX Components at Scale: Advice for News Publishers"
created-on: "2024-09-19T23:30:00Z"
updated-on: "2024-09-26T23:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/yuki-sato.json"
category: "categories/markdown.json"
---

mdx components sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
