---
title: "How Nonprofits Approach Image Pipelines"
created-on: "2022-11-19T13:00:00Z"
updated-on: "2023-01-10T13:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/priya-krishnan.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about image pipelines. It grew, because every answer raised two more questions.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
