---
title: "How I Like to Work: Incremental, Intentional, Structural"
summary: ""
date: 2026-02-11T12:00:00Z
tags: []
---

I’ve realized I’m less interested in the visible parts of engineering and more interested in what makes those parts possible.

The abstractions underneath. The patterns that hold them together. The guardrails that prevent the same mistakes from being made twice.

When something feels difficult to navigate, inconsistent, or fragile, that’s usually where I lean in. When systems begin accumulating friction, that’s where I focus.

Not because this work is glamorous, but because it compounds.

This pattern has repeated itself across nearly every team I've worked with.

I’m currently looking for my next role, and I’m looking for a team that values this kind of structural work — where improving the system itself is considered part of delivering the product, not separate from it.

## Structural Work, Repeated

Across teams, I’ve learned that friction is usually a signal of misalignment.

When systems require explanation just to be navigated, when contributors depend on unwritten rules, or when small changes create unpredictable side effects, that tension usually points to something structural. The issue isn’t the feature itself — it’s the way the system is shaped around it.

In practice, that has meant changing documentation pipelines instead of duplicating pages, introducing component systems instead of standardizing layouts through review comments, or even moving accessibility checks into tooling rather than relying on memory.

Structural changes alter how future contributors interact with the system. They reduce how much coordination is required. They make correct usage more natural and incorrect usage harder.

### TanStack

At [Tanstack](https://tanstack.com/), a lot of my work centered around reducing duplication and making documentation infrastructure more composable.

One of the first things I did was refactor our Markdown pipeline from `marked` to a `remark` → `rehype` architecture. This shift enabled component-level abstractions inside content — things like tabs for framework-specific examples — which helps reduce repeated pages that previously differed only by small callouts or framework-specific notes.

Instead of maintaining multiple near-identical pages across React, Solid, Svelte, Vue, etc., we could now centralize logic and reduce the divergences. The immediate impact is less repetition, but the long-term benefits are more consistent documentation and easier maintenance.

I also created the RSS feed system for Tanstack blogs, which sounds small, but required thinking through content generation, consistency, and distribution as part of the broader content ecosystem.

More recently, I've been working on releasing an a11y Devtool plugin, designed to help surface accessibility concerns inside applications more proactively. The goal is similar to the Markdown refactor; move accessibility from "remember to do this" into tooling that can help reinforce it as part of the development process.

Different surfaces, but the same underlying pattern of identifying friction points and building solutions that compound over time.

### SolidJS

With [SolidJS](https://www.solidjs.com/), my work was originally to improve documentation but it ended up extending well beyond that.

While I was working on the documentation, I helped to establish documentation standards and conventions. That including rethinking structure, organization, and contributor flow so the documentation better matched the mental model of the framework.

When documentation aligns with architecture, contributors can reason more effectively. When it doesn’t, friction increases and understanding (and maintenance) becomes more difficult.

Working across both structure and content meant balancing technical accuracy with navigability— something I consistently prioritize.

### Previous Work

Outside of my open source work, I’ve consistently found myself pulled toward the same kinds of problems.

At one of my previous roles, that showed up in advocating for — and building — a component and design system that made creating new iterations of the product significantly easier.

Before that work, each new project required rethinking layouts, variants, accessibility considerations, and structural decisions. The system absorbed that complexity.

Instead of re-solving:

- Component variants
- Accessibility edge cases
- Layout consistency
- Interaction patterns

The design system established clear guardrails. Once patterns passed accessibility review, they were safe to reuse. That shifted accessibility from something we had to repeatedly audit to something we could trust structurally.

It reduced friction for engineers. It reduced risk for the organization. And it allowed new editions to launch without reintroducing old mistakes.

I also worked on internationalization infrastructure, creating a structure that allowed non-technical stakeholders to manage translations and content updates without requiring developer intervention for every change.

That change redistributed ownership in a healthy way. Developers focused on development. Editors focused on content. The system handled the coordination.

The outcome was faster iteration. The structural outcome was reduced cognitive load and increased confidence across teams.

And that pattern — advocate, systematize, reduce duplication — is one I’ve repeated throughout my career.

## How this shows up on a team

I don’t disappear and return with surprise rewrites.

I aim to work in small, reviewable increments. I surface assumptions early. When something is ambiguous, I’ll outline the tradeoffs before the implementation rather than embedding them silently in code.

If the structure feels accidental, I’ll ask why. Not to override decisions— but to understand the constraints that shaped them.

I document context, seek clarity, and push for guardrails where your memory would be doing too much work.

My bias is toward reducing cognitive load — for contributors, for reviewers, and for the next person who has to touch the system.

And that doesn’t mean avoiding feature work. It means building features in systems that support them. Clear boundaries make bugs easier to isolate. Consistent patterns make debugging less about guesswork and more about traceability. Strong structure doesn’t slow delivery — it compounds it.

I care about building systems that make teams faster over time, not just busier in the moment. That’s the kind of environment I’m continuing to look for — one where infrastructure, clarity, and long-term thinking are treated as product work.

If you’re building something where that kind of work matters, I’d welcome the conversation. You can reach me at [hello@sarahgerrard.me](mailto:hello@sarahgerrard.me).
