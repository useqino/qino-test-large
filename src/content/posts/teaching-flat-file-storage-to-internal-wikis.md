---
title: "Teaching Flat-File Storage to Internal Wikis"
created-on: "2022-01-07T03:45:00Z"
updated-on: "2022-02-26T03:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/camille-laurent.json"
category: "categories/migration.json"
---

flat-file storage sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
