// Generates fake blog posts so the total in src/content/posts reaches TOTAL.
// Deterministic: same output on every run. Usage: node scripts/generate-posts.mjs

import { mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TOTAL = 10_000;
const POSTS_DIR = "src/content/posts";

// Mulberry32 PRNG, seeded for reproducible output
function createRandom(seed) {
  let state = seed;
  return function random() {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const random = createRandom(42);

function pick(list) {
  return list[Math.floor(random() * list.length)];
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const patterns = [
  (t, c) => `${t} for ${c}`,
  (t, c) => `A Practical Guide to ${t} for ${c}`,
  (t, c) => `Rethinking ${t} for ${c}`,
  (t, c) => `What ${c} Get Wrong About ${t}`,
  (t, c) => `${t}: Lessons from ${c}`,
  (t, c) => `Notes on ${t} for ${c}`,
  (t, c) => `The Hidden Cost of ${t} for ${c}`,
  (t, c) => `${t} in Practice: A Field Report from ${c}`,
  (t, c) => `Why ${c} Should Care About ${t}`,
  (t, c) => `Getting Started with ${t} for ${c}`,
  (t, c) => `${t} Without the Hype, for ${c}`,
  (t, c) => `A Checklist for ${t} Aimed at ${c}`,
  (t, c) => `Common Mistakes in ${t} Made by ${c}`,
  (t, c) => `${t} at Scale: Advice for ${c}`,
  (t, c) => `How ${c} Approach ${t}`,
  (t, c) => `The Case for ${t} Among ${c}`,
  (t, c) => `Small Wins in ${t} for ${c}`,
  (t, c) => `${t}, Revisited by ${c}`,
  (t, c) => `Measuring ${t} as ${c}`,
  (t, c) => `A Second Look at ${t} for ${c}`,
  (t, c) => `${t} Patterns That Work for ${c}`,
  (t, c) => `Debugging ${t} as ${c}`,
  (t, c) => `Ten Questions About ${t} from ${c}`,
  (t, c) => `${t} and the Long Tail of ${c}`,
  (t, c) => `Teaching ${t} to ${c}`,
];

const topics = [
  "Markdown Frontmatter",
  "Content Modeling",
  "Static Site Builds",
  "Flat-File Storage",
  "Schema Validation",
  "Image Pipelines",
  "Editorial Workflows",
  "Content Relations",
  "Type-Safe Content",
  "Slug Design",
  "Draft Handling",
  "Content Versioning",
  "Search Indexing",
  "RSS Feeds",
  "Sitemaps",
  "Open Graph Tags",
  "Reading Time",
  "Pagination",
  "Localization",
  "Preview Modes",
  "MDX Components",
  "Taxonomies",
  "Author Profiles",
  "Git-Based Publishing",
  "Content Migrations",
  "Build Caching",
  "Hot Reloading",
  "Alt Text",
  "Link Checking",
  "Content Linting",
  "Folder Structure",
  "Headless CMSes",
  "Rich Text Editors",
  "Pull Request Reviews",
  "Media Management",
  "Incremental Builds",
  "Content Audits",
  "Redirect Maps",
  "Structured Data",
  "Code Highlighting",
];

const contexts = [
  "Small Teams",
  "Solo Developers",
  "Agencies",
  "Documentation Sites",
  "News Publishers",
  "Open Source Projects",
  "Marketing Sites",
  "Personal Blogs",
  "Product Teams",
  "Large Archives",
  "Content Editors",
  "Technical Writers",
  "Design Systems",
  "E-commerce Catalogs",
  "Internal Wikis",
  "Startups",
  "Enterprises",
  "Nonprofits",
  "Course Platforms",
  "Podcast Sites",
];

const authors = readdirSync("src/content/authors").map((f) => `authors/${f}`);
const categories = readdirSync("src/content/categories").map(
  (f) => `categories/${f}`,
);
const images = readdirSync("public/images")
  .filter((f) => f.endsWith(".webp"))
  .map((f) => `/images/${f}`);

const openers = [
  "Most teams only notice {topic} once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.",
  "There is a quiet consensus that {topic} is solved. Spend a week with {context} and that consensus falls apart quickly.",
  "This post started as a short note to a colleague about {topic}. It grew, because every answer raised two more questions.",
  "If you work with {context}, you have probably met {topic} in its least friendly form: undocumented, half-automated, and owned by nobody.",
  "{topic} sounds like a detail. It is actually a decision that shapes how every future change lands.",
  "We rebuilt our approach to {topic} three times last year. Here is what survived.",
];

const paragraphs = [
  "The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.",
  "Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.",
  "Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.",
  "Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.",
  "Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.",
  "Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.",
  "Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.",
  "The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.",
  "Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.",
  "Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.",
  "Measure before optimizing. Most of the time the slow part is not the part everyone suspects.",
  "Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.",
];

const listItems = [
  "Keep one schema per collection and version it with the content.",
  "Fail the build on broken relations instead of logging a warning.",
  "Generate types from the schema rather than writing them twice.",
  "Prefer small, frequent changes over large content drops.",
  "Store media next to the content that uses it, or in one well-named folder.",
  "Make the default path the correct one for editors.",
  "Cache by content hash, not by timestamp.",
  "Document every field that is not self-explanatory.",
  "Run the same checks locally and in CI.",
  "Delete unused entries instead of hiding them.",
];

const headings = [
  "Where it goes wrong",
  "A simpler model",
  "What we changed",
  "Trade-offs",
  "In practice",
  "What to try next",
  "The checklist",
  "Edge cases",
];

const codeSamples = [
  '```ts\nconst posts = await postCollection.getEntries();\nconst recent = posts.filter((post) => post.createdOn > cutoff);\n```',
  '```bash\npnpm qino build\npnpm next build\n```',
  '```ts\nconst Schema = z.object({ title: z.string().min(1) }).strict();\n```',
  '```yaml\ntitle: "Example"\nauthor: "authors/jane-doe.json"\n```',
];

const closers = [
  "None of this is glamorous. It is the kind of work that makes the glamorous work possible.",
  "Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.",
  "The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.",
  "If you take one thing away, make it this: decide on purpose, and write the decision down.",
];

function fill(text, topic, context) {
  return text
    .replaceAll("{topic}", topic.toLowerCase())
    .replaceAll("{context}", context.toLowerCase());
}

function sample(list, count) {
  const copy = [...list];
  const result = [];
  while (result.length < count && copy.length > 0) {
    result.push(copy.splice(Math.floor(random() * copy.length), 1)[0]);
  }
  return result;
}

function buildBody(topic, context) {
  const blocks = [fill(pick(openers), topic, context)];
  const sectionCount = 1 + Math.floor(random() * 3);
  const sectionHeadings = sample(headings, sectionCount);

  for (const heading of sectionHeadings) {
    blocks.push(`## ${heading}`);
    for (const paragraph of sample(paragraphs, 1 + Math.floor(random() * 2))) {
      blocks.push(paragraph);
    }
    const extra = random();
    if (extra < 0.3) {
      blocks.push(
        sample(listItems, 3 + Math.floor(random() * 3))
          .map((item) => `- ${item}`)
          .join("\n"),
      );
    } else if (extra < 0.45) {
      blocks.push(pick(codeSamples));
    } else if (extra < 0.55) {
      blocks.push(`> ${pick(closers)}`);
    }
  }

  blocks.push(pick(closers));
  return blocks.join("\n\n");
}

function toIso(date) {
  return date.toISOString().replace(/\.\d{3}Z$/, "Z");
}

// Build every title combination, then shuffle deterministically
const combos = [];
for (const pattern of patterns) {
  for (const topic of topics) {
    for (const context of contexts) {
      combos.push({ title: pattern(topic, context), topic, context });
    }
  }
}
for (let i = combos.length - 1; i > 0; i--) {
  const j = Math.floor(random() * (i + 1));
  [combos[i], combos[j]] = [combos[j], combos[i]];
}

mkdirSync(POSTS_DIR, { recursive: true });
const existing = new Set(readdirSync(POSTS_DIR));
const needed = TOTAL - existing.size;

if (needed <= 0) {
  console.log(`Already ${existing.size} posts, nothing to do.`);
  process.exit(0);
}

// Dates spread over ~6 years ending 2026-11-01
const end = Date.UTC(2026, 10, 1);
const start = Date.UTC(2020, 10, 1);

let written = 0;
for (const combo of combos) {
  if (written == needed) break;
  if (combo.title.length > 120) continue;

  const filename = `${slugify(combo.title)}.md`;
  if (existing.has(filename)) continue;
  existing.add(filename);

  const createdOn = new Date(start + random() * (end - start));
  createdOn.setUTCMinutes(Math.floor(random() * 4) * 15, 0, 0);
  const updatedOn = new Date(
    createdOn.getTime() + Math.floor(random() * 60) * 24 * 3600 * 1000,
  );

  const frontmatter = [
    "---",
    `title: ${JSON.stringify(combo.title)}`,
    `created-on: "${toIso(createdOn)}"`,
    `updated-on: "${toIso(updatedOn)}"`,
    `image: "${pick(images)}"`,
    `author: "${pick(authors)}"`,
    `category: "${pick(categories)}"`,
    "---",
  ].join("\n");

  writeFileSync(
    join(POSTS_DIR, filename),
    `${frontmatter}\n\n${buildBody(combo.topic, combo.context)}\n`,
  );
  written++;
}

if (written < needed) {
  throw new Error(`Only generated ${written} of ${needed} posts`);
}

console.log(`Generated ${written} posts (total ${existing.size}).`);
