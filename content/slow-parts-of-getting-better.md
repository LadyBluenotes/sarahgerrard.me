---
title: "The Slow Parts of Getting Better"
summary: """
date: 2026-03-31T12:00:00Z
tags: []
---

Most of the progress I've made as a developer in the last year doesn't show up anywhere.

It's not in my commit history. It's not in merged PRs or shipped features. There's no diff for "finally internalized how reactivity propagation works" or "can now explain the tradeoff between colocation and composition without rehearsing it first." Those things happened. They changed how I work. But they happened slowly, unevenly, and without any deliverable to point to.

The visible work — the PRs, the docs pages, the open source contributions — gets treated as the whole picture. And it's not. The visible work is the output of a process that's mostly invisible, even to the person doing it.

## Mental Models Don't Arrive on a Schedule

There's a specific kind of understanding that only comes with time, and it's different from knowing how to use an API.

I can read documentation for a library and use it the same day. I can follow a tutorial and produce a working result. But understanding *why* it's designed that way (eg. what problem it's actually solving, what it chose not to solve, and what constraints shaped those decisions) that takes longer. Sometimes weeks or months of working with it before the whole picture is clear.

For a while, I thought that delay meant I wasn't a good developer. That other developers were getting there faster and I was falling behind. What I've since realized is that the delay is part of my process. The understanding doesn't come from reading harder (or more often). For me, it comes from encountering the edges of the abstraction or the places where things bend, break, or where the documentation gets thin and the design reveals its tradeoffs.

That kind of learning can't be rushed. And it rarely points to a single piece of code or a single design decision.

## Articulation Is Its Own Skill

There's a gap between being able to do something and being able to explain it. I've felt that gap more sharply than almost anything else in my career.

I could build a feature using a framework and have it work correctly. But if someone asked me to explain *how* the reactivity system tracked dependencies, or *why* fine-grained updates mattered compared to a virtual DOM diffing strategy, I'd struggle. Not necessarily because I didn't know the answer, but because I didn't have the skill to articulate it.

Closing that gap has been some of the hardest work I've done. Writing documentation helped — when you have to explain a concept to someone encountering it for the first time, you certainly discover exactly where your own understanding has gaps. Reviewing other people's explanations helped, too. Noticing where I'd write something differently forced me to articulate *why*, which meant confronting what I actually believed about how the system worked.

This wasn't (and isn't!) a one-time effort. Every new system, abstraction, and layer of complexity reopens the gap. The skill isn't eliminating it, it's getting faster at closing it.

## Tradeoff Fluency

Early in my career, I thought technical decisions had all the right answers. A library was either the correct choice or the wrong one. An architecture was either good or bad. Performance was either fast enough or not.

What I've been building slowly through exposure more than study, is the ability to reason about tradeoffs without reducing them to a binary. To say things like:

- "This approach is simpler but harder to extend." 
- "This abstraction reduces duplication but makes the dependency graph less obvious." 
- "This tool is ergonomic for the common case but fights you on edge cases."

Those sentences sound straightforward, but being able to produce them *in the moment* — in a design discussion, in a review comment, in a conversation about whether to refactor — requires a kind of fluency that doesn't come from reading blog posts about system design. It comes from having been wrong enough times that you start to recognize the shape of a tradeoff before it bites you.

I'm still building that fluency. I notice it improving when I catch myself pausing less before weighing in on an approach, or when I can name the downside of my own suggestion before someone else does. But it's not the kind of progress that shows up in a sprint retro.

## The Invisible Compound

The frustrating thing about this kind of growth is that it doesn't feel productive while it's happening. There are stretches where I'm reading source code, sitting with a concept, or reworking an explanation for the third time — and the output is nothing. No PR. No feature. No visible progress.

But then something shifts. A design conversation that would've overwhelmed me six months ago feels navigable. A code review catches something I wouldn't have noticed before. An explanation I give in a PR description is clear enough that the reviewer doesn't need to ask follow-up questions.

Those moments don't announce themselves. They just happen, and you realize the slow work was working.

I think there's a tendency — especially in an industry that measures output in commits and velocity — to undervalue this kind of progress. The developer who shipped three features is more visible than the developer who spent that time building the understanding that will make the next ten features cleaner. Both matter. But only one gets celebrated in standup.

## Where I Am Now

I'm not writing this from the other side of some transformation. I'm in the middle of it.

There are still concepts I can use but can't fully explain. There are still design discussions where I know something feels off but can't articulate why quickly enough. There are still moments where the gap between what I understand and what I can communicate is wider than I'd like.

But the gap is smaller than it was a year ago. And the fact that I can see it clearly — can name the specific places where my understanding is intuitive rather than explicit — feels like progress in itself.

The slow parts are still the work. They just don't leave a paper trail.