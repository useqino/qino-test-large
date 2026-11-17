---
title: "Content Migrations in Practice: A Field Report from Solo Developers"
created-on: "2021-04-29T08:45:00Z"
updated-on: "2021-06-12T08:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/jane-doe.json"
category: "categories/performance.json"
---

content migrations sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
