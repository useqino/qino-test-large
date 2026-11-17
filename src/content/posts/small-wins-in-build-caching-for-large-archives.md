---
title: "Small Wins in Build Caching for Large Archives"
created-on: "2025-05-08T17:45:00Z"
updated-on: "2025-05-09T17:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/architecture.json"
---

There is a quiet consensus that build caching is solved. Spend a week with large archives and that consensus falls apart quickly.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
