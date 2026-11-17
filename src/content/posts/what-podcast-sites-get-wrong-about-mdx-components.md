---
title: "What Podcast Sites Get Wrong About MDX Components"
created-on: "2024-10-04T13:15:00Z"
updated-on: "2024-11-22T13:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/lars-eriksson.json"
category: "categories/architecture.json"
---

mdx components sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

If you take one thing away, make it this: decide on purpose, and write the decision down.
