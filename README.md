# NexaAI — Loop Engineering Demo

> AI consulting agency website — scaffold only. Every page is built autonomously via Loop Engineering, one Jira story at a time.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Design | Dark-mode glassmorphism (built by NEXA-4) |

This is intentionally a bare `create-next-app` scaffold — only `app/layout.tsx`, `app/page.tsx`, and `app/globals.css` exist, all with default starter content. Nothing else has been pre-built on purpose: the nav/footer/design-system (NEXA-4) and all 9 pages are backlog items for the routine to implement, one PR per story.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## What is Loop Engineering?

Loop Engineering is an autonomous development pipeline where a scheduled Claude cloud agent reads Jira stories, implements them as code, and opens one GitHub PR per story — no babysitting required.

```
Jira To Do -> Claude implements -> PR opened -> Human merges -> repeat
```

See the `NEXA` project in Jira for the full 10-story backlog across 5 sprints.
