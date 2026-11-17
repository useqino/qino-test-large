---
title: "Measuring Code Highlighting as Large Archives"
created-on: "2024-05-23T21:45:00Z"
updated-on: "2024-06-25T21:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/raj-patel.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about code highlighting. It grew, because every answer raised two more questions.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
