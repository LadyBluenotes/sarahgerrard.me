---
title: "How I Like to Work"
summary: ""
date: 2026-02-11T12:00:00Z
tags: []
---

I’m currently looking for my next role, and that process has clarified something that’s been consistent across nearly every team I’ve worked with: I tend to gravitate toward the parts of engineering that are easy to overlook.

> If you're curious about my work history or would like to reach out, you can [find me on LinkedIn](https://www.linkedin.com/in/sarahgerrard/) or [email me at hello@sarahgerrard.me](mailto:hello@sarahgerrard.me).

Not the visible features or the surface polish, but the structural decisions beneath them — the conventions that make a codebase predictable, the abstractions that reduce repetition, the small quality-of-life improvements that clients may never explicitly notice but feel in the product’s reliability, coherence, and adaptability.

Over time, I’ve realized this isn’t incidental. When I enter a system, I notice the friction others have learned to work around. The places that require explanation. The assumptions that exist only in a shared context. The patterns that almost work — but not consistently enough to disappear into the background.

That pattern of attention has followed me across teams, and it has shaped the kind of work I choose to do.

## Structural Work, Repeated

### TanStack

<picture data-theme-picture>
     <source data-theme="dark" srcset="https://tanstack.com/images/logos/logo-word-white.svg">  
     <source data-theme="light" srcset="https://tanstack.com/images/logos/logo-word-black.svg">
     <img  
         data-src-dark="https://tanstack.com/images/logos/logo-word-white.svg"
         data-src-light="https://tanstack.com/images/logos/logo-word-black.svg"
         src="https://tanstack.com/images/logos/logo-word-black.svg"  
         alt="TanStack logo">
</picture>

At [Tanstack](https://tanstack.com/), a lot of my work centered around reducing duplication and making documentation infrastructure more composable.

One of the first things I did was [refactor our Markdown pipeline from `marked` to a `remark` → `rehype` architecture](https://github.com/TanStack/tanstack.com/pull/546). This shift enabled component-level abstractions inside content — things like tabs for framework-specific examples — which helps reduce repeated pages that previously differed only by small callouts or framework-specific notes.

<picture>
    <img src="/images/tanstack_markdown_migration.png" alt="Screenshot of TanStack Markdown migration pull request">
</picture>

Instead of maintaining multiple near-identical pages across React, Solid, Svelte, Vue, etc., we could now centralize logic and reduce the divergences. The immediate impact is less repetition, but the long-term benefits are more consistent documentation and easier maintenance.

| Before                                                                                                                      | After                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| <picture> <img src="/images/tanstack_before_markdown.png" alt="Screenshot of TanStack before Markdown refactor"> </picture> | <picture> <img src="/images/tanstack_after_markdown.png" alt="Screenshot of TanStack after Markdown refactor"> </picture> |

I also [created the RSS feed system for Tanstack blogs](https://github.com/TanStack/tanstack.com/pull/629), which sounds small, but required thinking through content generation, consistency, and distribution as part of the broader content ecosystem.

<picture>
    <img src="/images/tanstack_rss_feed.png" alt="Screenshot of TanStack RSS feed">
</picture>

More recently, I've been [working on releasing an a11y Devtool plugin](https://github.com/TanStack/devtools/pull/326), designed to help surface accessibility concerns inside applications more proactively. The goal is similar to the Markdown refactor; move accessibility from "remember to do this" into tooling that can help reinforce it as part of the development process.

<picture>
    <img src="/images/tanstack_a11y_devtools_screenshot.png" alt="Screenshot of TanStack a11y Devtool">
</picture>

Different surfaces, but the same underlying pattern of identifying friction points and building solutions that compound over time.

### SolidJS

<picture>
    <img src="https://www.solidjs.com/img/logo/without-wordmark/logo.svg" alt="SolidJS logo" width="150">
</picture>

For nearly three years now, I have lead the docs effort on [SolidJS](https://www.solidjs.com/). To-date, I am the [most active contributor to their docs with over 200,000+ lines changed on the project](https://github.com/solidjs/solid-docs/graphs/contributors).

<picture>
    <img src="/images/solidjs_contribution.png" alt="Screenshot of my SolidJS docs contributions" width="450px">
</picture>

While working on the documentation, my role expanded beyond improving content into helping establish documentation standards and conventions. This included rethinking structure, organization, and contributor flow so the documentation better reflected the framework’s mental model.

<picture>
    <img src="/images/solid_docs_screenshot.png" alt="Screenshot of SolidJS docs site">
</picture>

When documentation aligns with architecture, contributors can reason more effectively. When it doesn’t, friction increases and understanding — and maintenance — become more difficult.

Working across both structure and content meant balancing technical accuracy with navigability, something I consistently prioritize. The needs surfaced during this revamp also contributed to the creation of [SolidBase](https://solidbase.dev/), built on SolidStart, which emerged alongside the docs effort as an exploration of more composable, architecture-aligned documentation systems.

### Previous Work

Outside of my open source work, I’ve consistently found myself pulled toward the same kinds of problems.

At one of my previous roles, that showed up in advocating for — and building — a component and design system that made creating new iterations of the product significantly easier.

<table>
    <tr>
        <td>
            <picture>
                <img src="/images/votecompass_aus.png" alt="Screenshot of Vote Compass Australia">
            </picture>
        </td>
        <td>
            <picture>
                <img src="/images/votecompass_can.png" alt="Screenshot of Vote Compass Canada">
            </picture>
        </td>
    </tr>
</table>

Before that work, each new project required rethinking layouts, variants, accessibility considerations, and structural decisions. The system absorbed that complexity.

Instead of re-solving:

- Component variants
- Accessibility edge cases
- Layout consistency
- Interaction patterns

The design system established clear guardrails. Once patterns passed accessibility review, they were safe to reuse. That shifted accessibility from something we had to repeatedly audit to something we could trust structurally.

It reduced friction for engineers. It reduced risk for the organization. And it allowed new editions to launch without reintroducing old mistakes.

I also worked on internationalization infrastructure, creating a structure that allowed non-technical stakeholders to manage translations and content updates without requiring developer intervention for every change.

<picture>
    <img src="/images/votecompass_can_fr.png" alt="Screenshot of Vote Compass Canada in French" width="600px">
</picture>

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
