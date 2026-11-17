---
title: "Small Wins in Content Migrations for Personal Blogs"
created-on: "2023-06-25T21:00:00Z"
updated-on: "2023-08-19T21:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/felix-berger.json"
category: "categories/tooling.json"
---

content migrations sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
