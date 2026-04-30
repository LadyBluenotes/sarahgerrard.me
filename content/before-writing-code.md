---
title: Questions I Ask Before I Write a Line of Code
summary: A practical list of questions I run through before starting work to scope the smallest useful change, reduce surprises, and make my work easier to review, test, and maintain.
date: 2026-02-13T12:00:00.000Z
category: code
tags: [planning, code-review, maintainability]
---

I try to treat code as a conversation. Sometimes that conversation is with the people I’m working with. Sometimes it’s with the user. Often, it’s with my future self. To keep the conversations productive, I ask questions that force clarity, narrow scope, and make the tradeoffs explicit.

These questions aren’t about being pedantic. They’re about shipping with confidence.

## The questions I ask (and why they matter)

Figuring out the “right” questions to ask doesn't come naturally. It gets built through trial and error — messy PRs, late-night debugging, and a lot of reflection.

Over time, those mistakes turn into patterns: small prompts that stop problems early, make reviews faster, and help me communicate intent more clearly.

Now, the list is almost reflexive. I run through it quickly before starting work or a project. But it was earned through fumbling, rewriting, and deliberate practice.

### The general questions

While every project has its own constraints, there are core questions I ask for nearly every task:

| Question                                        | Why it matters                                                  |
| ----------------------------------------------- | --------------------------------------------------------------- |
| What am I trying to achieve?                    | Clarifies the goal and avoids vague tasks.                      |
| What problem are we solving?                    | Keeps scope focused and prevents feature creep.                 |
| Who is the user and what is their intent?       | Influences UX, accessibility, and success criteria.             |
| How will I verify this works?                   | Defines acceptance criteria and avoids ambiguous PRs.           |
| How will this be tested (unit/integration/e2e)? | Ensures coverage and reduces regressions.                       |
| What are the real constraints and tradeoffs?    | Makes performance, size, and maintenance implications explicit. |

These questions shift attention away from naïve implementations and toward clarity: defining the goal, naming the metric of success, and identifying the smallest change to achieve it. That upfront discipline reduces wasted work, shortens review cycles, and gives reviewers a clear way to evaluate the change.

This step is also about communication. When assumptions and tradeoffs are made explicit, teammates — including non-technical stakeholders — can weigh in earlier. That reduces misunderstandings and prevents small changes from expanding into expensive rework.

## Focused Checks for Cross‑Cutting Concerns

Some changes are not isolated to a single file, either. They touch accessibility, performance, documentation, or a public API. When that happens, I pause and run a more targeted set of questions to avoid breaking a wider surface area.

| Question                                         | Why it matters                                               |
| ------------------------------------------------ | ------------------------------------------------------------ |
| Does this impact keyboard / screen reader users? | Ensures accessibility is considered from the start.          |
| What performance implications does this have?    | Prevents UX regressions and keeps the app responsive.        |
| What needs updating in documentation and where?  | Reduces follow-up issues and onboarding friction.            |
| Who will need to review this?                    | Speeds up the review process and ensures relevant expertise. |

After answering these, I convert them into concrete follow-ups: add an accessibility test, update a doc page, capture a performance baseline, tag the right reviewers. If two checks conflict, such as a micro-optimization that would reduce accessibility, it forces an explicit tradeoff before anything ships.

For higher-risk changes, I prefer a more phased approach: ship the minimal safe iteration, validate metrics and audits, then iterate.

This practice keeps rollbacks cheap and makes incremental improvement safer.

## The closing move

Pause for the right question, and you avoid a week of firefighting.

This practice isn’t bureaucracy; it’s insurance. A brief pause to name the problem, define success, and clarify tradeoffs prevents accidental regressions and long review cycles. It turns guesswork into decisions.

Teams notice this discipline. It makes code easier to review, maintain, and trust in production. The habit can feel slow at first, especially around a “just ship it” culture, but over time it compounds.

It’s not about shipping less. It’s about shipping deliberately.
