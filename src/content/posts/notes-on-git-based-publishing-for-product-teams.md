---
title: "Notes on Git-Based Publishing for Product Teams"
created-on: "2021-11-06T22:15:00Z"
updated-on: "2021-11-07T22:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/felix-berger.json"
category: "categories/seo.json"
---

git-based publishing sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
