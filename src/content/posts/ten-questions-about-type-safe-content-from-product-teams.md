---
title: "Ten Questions About Type-Safe Content from Product Teams"
created-on: "2023-01-13T20:45:00Z"
updated-on: "2023-03-11T20:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/lars-eriksson.json"
category: "categories/migration.json"
---

type-safe content sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

If you take one thing away, make it this: decide on purpose, and write the decision down.
