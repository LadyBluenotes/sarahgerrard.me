---
title: Questions I Ask Before I Write a Line of Code
summary: A practical list of questions I run through before starting work to scope the smallest useful change, reduce surprises, and make my work easier to review, test, and maintain.
date: 2026-01-12T12:00:00.000Z
---

I try to treat code as a conversation. These conversations can be geared towards those I'm working with, what the user might expect, or even my future self. To keep these conversations productive, I ask myself questions that force clarity, limit the scope, and make the tradeoffs a bit more explicit.

These questions aren't about pedantic; they're about making sure I'm shipping with confidence.

## The questions I ask (and why they matter)

While questions are important, I do understand that figuring out the "right" questions to ask can be tricky. It didn't come naturally, in fact it was something I built through: trial and error, messy PRs, late-night debugging, and a lot of reflection. Over time those mistakes turned into patterns: small prompts that stop mistakes early, make reviews faster, and help me communicate intent.

With time this list has become almost reflexive, meaning I run through it quickly before starting, but it was earned through all the fumbling, rewriting, and deliberate practice I've done over the years.

### The general questions

While some projects may have specific needs, there are general questions I ask for nearly every task:

| Question                                        | Why it matters                                                    |
| ----------------------------------------------- | ----------------------------------------------------------------- |
| What am I trying to achieve?                    | Clarifies the goal and avoids vague tasks.                        |
| What problem are we solving?                    | Keeps scope focused and prevents feature creep.                   |
| Who is the user and what's their intent?        | Influences UX, accessibility, and success criteria.               |
| How will I verify this works?                   | Defines acceptance tests and avoids ambiguous PRs.                |
| How will this be tested (unit/integration/e2e)? | Ensures coverage and reduces regressions.                         |
| What are the real constraints and tradeoffs?    | Makes performance, size, and maintenance considerations explicit. |

These questions aim to shift the attention away from naive implementations and towards clarity: defining the goal, the metric of success, and the smallest change that will get us there. The upfront discipline reduces wasted work, makes PRs faster to review, and gives reviewers a clear way to verify the change.

This step is also about communication. When you're working on a team, making sure everyone involved in a feature, product, or design can see the assumptions and tradeoffs up-front provides clarity. With clearer communication, non-technical stakeholders can weigh in earlier, and everyone spends less time unpacking misunderstandings after the fact. Over time this habit reduces rework and keeps small changes from growing into large, expensive ones.

## Focused Checks for Cross‑Cutting Concerns

Some changes are more than a single-file tweak: they touch accessibility, performance, docs, or the public API. When that happens, I stop and run a slightly different set of questions to make sure we don't accidentally break a wider surface area. The table below lists examples of these focused checks:

| Question                                         | Why it matters                                               |
| ------------------------------------------------ | ------------------------------------------------------------ |
| Does this impact keyboard / screen reader users? | Ensures accessibility is considered from the start.          |
| What performance implications does this have?    | Prevents UX regressions and keeps the app responsive.        |
| What needs updating in documentation and where?  | Reduces follow-up issues and onboarding friction.            |
| Who will need to review this?                    | Speeds up the review process and ensures relevant expertise. |

After answering these, I convert them into concrete follow-ups: add an accessibility note or a11y test, add or update a doc page, run a quick perf measurement and record the baseline, and list the reviewers in the PR (or reach out to them explicitly). If two checks conflict (for example, a micro-optimization that would worsen accessibility), it gives me a chance to pause and evaluate the tradeoff before shipping.

For risky or cross-domain changes, I prefer a phased approach: ship the minimal safe iteration, validate metrics and audits, then iterate. That keeps rollbacks cheap and makes it easier for the team to land safe improvements more often.

## The closing move

Pause for the right question, and you avoid a week of firefighting.

This practice isn't bureaucracy, it provides insurance against wasted work and costly mistakes. A thirty-second pause to name the problem, pick a success metric, and determine the tradeoffs prevents wasted work, shippable-but-accidental regressions, and long review cycles. It turns guesswork into decisions.

Teams notice this kind of discipline. It makes code easier to review, easier to maintain, and far easier to trust in production. It might be difficult to build the habit, you may even get pushback at first with the "just figure it out" crowd, but over time it pays off.

It's not about shipping less, it's about shipping better.
