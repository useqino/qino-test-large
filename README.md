# qino-test-large

A large test Next.js site built with [qino](https://github.com/CharlyMartin/qino), with 10,000 blog posts. It's used to test the qino cloud UI at scale. The cloud UI reads the generated `qino/_generated/config.json`.

Same setup as [qino-test](https://github.com/useqino/qino-test). Blog only (no docs), plus the generated posts.

## Getting started

```bash
pnpm install
pnpm dev
```

`pnpm build` runs `qino build` first, which regenerates `qino/_generated/config.json`. Commit that file when it changes so the cloud UI picks it up.

## Generated posts

`scripts/generate-posts.mjs` tops up `src/content/posts` to 10,000 posts with deterministic fake content:

```bash
node scripts/generate-posts.mjs
```
