---
title: "Common Mistakes in Slug Design Made by Open Source Projects"
created-on: "2025-08-27T23:00:00Z"
updated-on: "2025-10-14T23:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/raj-patel.json"
category: "categories/seo.json"
---

slug design sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
