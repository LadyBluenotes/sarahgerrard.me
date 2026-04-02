---
title: "The Slow Parts of Getting Better"
summary: "Most of the growth that matters as a developer happens slowly and invisibly — building mental models, learning to articulate what you know, getting better at reasoning about tradeoffs. This post is about making peace with that process, even when there's no PR or shipped feature to show for it."
date: 2026-04-03T12:00:00Z
tags: []
---

Lately, I've been thinking about how much of my growth as a developer has happened in ways that are hard to point to.

It's not in my commit history. It's not in merged PRs or shipped features. There's no diff for "finally understanding what's actually happening during hydration" or "getting much better at noticing the performance costs of a site before they become obvious problems." You could maybe point to a few PRs or features that I've merged, but that's not the whole story. Those things happened, though. They changed how I work, but they happened slowly, unevenly, and without any obvious artifacts to hold up as proof that say "look, I got better at this!"

For a long time, I treated the visible work as the real work. The PRs, the docs pages, the shipped features. That's the part other people can see, and honestly, it's the part I knew how to talk about. What I've realized instead is that a lot of the work that changes me as a developer happens before any of that becomes visible.

![Systems-thinking iceberg diagram with visible events above the waterline and deeper layers below labeled pattern trends, structures, and mental models.](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F008%2F902%2F881%2Foriginal%2Ficeberg-s-model-of-system-thinking-is-an-illustration-of-the-blue-mountain-and-presentation-this-theory-is-to-analyze-the-root-causes-of-events-hidden-underwater-for-developing-marketing-trend-vector.jpg&f=1&nofb=1&ipt=f96c54b5cec9b7a967922125acc9c057e13a1bf7ac87c7d851e309b6690f3e9d)

## Mental Models Don't Arrive on a Schedule

One thing I've had to make peace with is that there are parts of understanding that don't arrive when you expect or want them to.

I can read documentation for a library and use it the same day. I can follow a tutorial and produce a working result. But understanding _why_ it's designed that way (eg. what problem it's actually solving, what it chose not to solve, and what constraints shaped those decisions) that takes longer. Sometimes weeks or months of working with it before the whole picture is clear.

For a while, I interpreted that delay as a personal failing. I assumed that if I were sharper, more disciplined, or just more naturally technical, the understanding would arrive faster. I thought other developers were getting there more quickly, and I was somehow behind.

What I've since realized is that the delay is part of how I learn. The understanding usually doesn't come from reading things closer or reading more. For me, it comes from running into the problem enough times that I'm forced to think about it differently. It comes from the moments where things bend, break, or stop feeling obvious. It even comes from the places where the documentation gets thin or just isn't written in a way that clicks for me.

I've come to understand that this kind of learning isn't something I can rush. It's rarely a single piece of code or a single design decision that points to a "eureka!" moment. It's more like a slow accumulation of experience that eventually turns into a clearer mental model.

## Articulation Is Its Own Skill

One of the clearest patterns in my own growth has been the gap between being able to do something and being able to explain it.

I could build something that worked. But if someone asked me to explain _what_ the browser was doing, or _why_ a site felt slower than it looked on the surface, I'd struggle. Not necessarily because I had no sense of the answer, but because I didn't know how to articulate it. I had an intuitive sense of what was going on, but I couldn't put it into words that would make sense to someone else.

Closing that gap has been some of the hardest work I've done. It's also been some of the most personal, because it has forced me to confront the difference between what feels intuitive in my head and what I can actually put into words.

Writing documentation has helped. When I have to explain a concept to someone encountering it for the first time, I find out very quickly where my own explanations may fall apart. Listening to other people's explanations has helped, too. If I notice I'd phrase something differently, I stop and ask questions. Usually, those questions lead me closer to the part of my understanding that's still half-formed.

This wasn't (and isn't!) a one-time effort. Every new system, abstraction, and layer of complexity reopens the gap. The skill isn't eliminating it, it's working to get faster at closing it.

## Tradeoff Fluency

I used to think good engineering judgment looked like certainty. Some things were either "good" or "bad." Some things were either "fast" or "slow."

What I've been building instead, mostly through exposure and repetition, is the ability to reason about tradeoffs without flattening them into a binary. That means saying things like:

- "This approach is simpler but harder to extend."
- "This abstraction reduces duplication but makes the dependency graph less obvious."
- "This tool is ergonomic for the common case but fights you on edge cases."

Those sentences sound straightforward, but being able to produce them _in the moment_ has taken me a long time. That fluency didn't come from reading a few blog posts about system design. It came from being wrong enough times that I started recognizing the shape of a tradeoff before it bit me.

## The Part That's Hard to Admit

Part of what has made this harder is imposter syndrome. It's difficult to admit that you're still piecing these things together when you're surrounded by people who are so intelligent, have been in the industry much longer than you, and can state tradeoffs with so much confidence that it sounds immediate and natural.

![Post saying "Meta-imposter syndrome: When you know a lot of people have imposter syndrome, but you've witnessed how competent they are. So they're not like you, the real imposter."](https://i.pinimg.com/736x/27/08/ff/2708ff87dc9e6006dc3d0c046e2de2d1.jpg)

I think that's been one of the more isolating parts of getting better. When someone can confidently say, "this is the simpler option, but it'll make future changes harder," or "this helps performance here but adds complexity somewhere else," it can be easy to assume they just naturally see everything faster than I do.

What I have to keep reminding myself is that confidence doesn't mean the understanding arrived effortlessly. A lot of what sounds crisp and immediate is probably the result of those years of practice, repetition, and having already worked through the slower parts that I'm still in the middle of.

I'm still building that fluency. I notice it improving when I pause less before weighing in, or when I can name the downside of my own suggestion before someone else does.

### The Invisible Compounding

The frustrating part, at least for me, is that this kind of growth rarely feels productive while it's happening. There are stretches where I'm just sitting reading source code, sitting with a concept, or reworking an explanation for the third time, and from the outside it looks like I'm doing nothing. There's no PR, feature, or visible progress to account for the time that has passed.

But then something shifts. A design conversation that would've overwhelmed me six months ago feels navigable. A code review catches something I wouldn't have noticed before. An explanation I give in a PR description is clear enough that the reviewer doesn't need to ask follow-up questions.

Those moments don't announce themselves, they just happen. You then look back and realize the progress was happening the whole time.

## The Value of the Slow Parts

In an industry that seems to value the output of work through things like commits and velocity, this kind of progress feels like a waste of time. It can be easy to undervalue the slow, invisible parts of getting better, especially when they don't leave a paper trail. 

But I think that's a mistake. 

Those parts are the foundation for the visible work. They shape how I approach problems, how I design systems, and how I communicate with others. They may not be visible, but they're essential.

As much as it seems like things are moving in the opposite direction, where people are now shipping more code and more features thanks to AI and ML, the reality is that these points still matter.

I'm not writing this from the other side of some neat transformation story. I'm still very much in the throes of it all. There are still concepts I can use but can't fully explain. There are design discussions where I know something feels off but can't quite articulate why eloquently. There are even moments where the gap between what I understand and what I can communicate is wider than I'd like.

But with each passing day, I'm learning that the gap continues to shrink. I'm learning that I can explain things that I didn't know before. I can use my existing understanding to get to new places that I couldn't before. I can have more confidence in my own judgment, even when it's still a work in progress

The fact that I can see it more clearly now, can even name the specific places where my understanding is intuitive rather than explicit, feels like progress in itself.

And honestly, the slow parts might take a lot of work, but they are still worth it. Sometimes, they just don't give us the tangible results we expect, and that's okay. 

The growth is happening, even if it doesn't look like it in the moment.
