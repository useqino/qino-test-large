---
title: "Why Personal Blogs Should Care About Headless CMSes"
created-on: "2021-05-27T09:15:00Z"
updated-on: "2021-06-14T09:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/felix-berger.json"
category: "categories/markdown.json"
---

There is a quiet consensus that headless cmses is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
