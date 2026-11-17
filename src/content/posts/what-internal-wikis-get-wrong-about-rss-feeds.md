---
title: "What Internal Wikis Get Wrong About RSS Feeds"
created-on: "2021-04-05T02:30:00Z"
updated-on: "2021-05-27T02:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/mei-tanaka.json"
category: "categories/markdown.json"
---

rss feeds sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
