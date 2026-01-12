--- 
title: Making Mistakes in Public Isn’t a Failure
summary: elllo
date: 2026-01-01
---

There’s a quiet rule many of us internalize early: **don’t be wrong where people can see it**.

Once your work is public (open source, PRs, issues, RFCs, blog posts about systems) you’re expected to already know the answer. To push clean commits. To ask “good” questions. To never misunderstand an API in a way that leaves a paper trail.

That pressure is real. And it shapes how people show up more than we like to admit.

## Public Code Comes With Permanent Visibility

Code has memory.

Every commit, every PR comment, every review suggestion sticks around long after the context that produced it fades. A mistaken assumption doesn’t just disappear once it’s corrected; it lives on in the diff history. An early design idea that didn’t pan out can still be pulled up months later.

That permanence changes behavior.

People hesitate to:
- Open exploratory PRs
- Touch unfamiliar parts of a codebase
- Ask clarifying questions in issues
- Admit they don’t fully understand an abstraction yet

A mistake in code feels worse than being wrong in conversation because it looks *objective*. There’s evidence. A line number. A before-and-after. It can feel like the mistake says something definitive about your ability, rather than something temporary about your understanding at that moment.

But code history isn’t a record of incompetence. It’s a record of how understanding evolved over time.

## Most “Mistakes” in Code Are Just Intermediate States

A lot of what we label as mistakes are really just **transitional states** in the process of building something real.

A refactor exposes an edge case no one had accounted for.  
A performance optimization backfires because production traffic behaves differently than expected.  
A type definition seems airtight until a new consumer uses it unexpectedly.  
A cleanup PR breaks something because the dependency graph was more tangled than anyone realized.

None of that indicates failure. It indicates reality.

Complex systems don’t reveal themselves all at once. They reveal themselves through interaction; by being changed, stressed, misused, and corrected. If you never see mistakes in a codebase, it usually means one of two things:
- The learning happened privately, behind closed doors
- Or the system isn’t being meaningfully challenged

Neither scale particularly well.

## Open Source Raises the Stakes (and the Fear)

In open source, everything is amplified.

Your work isn’t just visible to teammates, it’s visible to maintainers you respect, contributors you’ve never met, and potential employers you didn’t even realize were watching. Feedback happens in public threads. Corrections are visible to everyone.

That can turn every misstep into a perceived judgment on whether you belong.

But the reality is very different from the fear. Most experienced maintainers don’t expect perfection. They expect:
- Clear intent
- Willingness to engage with feedback
- Openness to revising an approach
- Follow-through once issues are identified

A PR that starts rough and improves through discussion is often *more* valuable than one that arrives fully polished but opaque. It shows how you think. It shows that you can collaborate. It shows that you can adapt.

Avoiding contribution to protect your image helps no one; not the project, and not you.

## Code Review Is Not a Trial

Code review often *feels* adversarial, even when it isn’t meant to be.

Comments can be blunt. Context can be missing. Tone doesn’t always carry well. And when you’ve invested time and care into a solution, even neutral feedback can feel personal.

But code review, at its best, is shared problem-solving:
- Stress-testing assumptions
- Surfacing edge cases
- Exploring trade-offs
- Making implicit decisions explicit

Being corrected in review doesn’t mean you failed. It means the system worked. Someone else brought a perspective you didn’t have. That’s the point.

The real damage happens when corrections are treated—explicitly or implicitly—as proof of incompetence rather than part of collaborative reasoning.

## Shipping Code Teaches You Things Thinking Never Will

There’s a limit to how much you can reason about a system in advance.

Some lessons only appear once code exists in the world:
- Performance characteristics under a real load
- How APIs feel to actual consumers
- Where abstractions become burdens instead of helpers
- What maintenance really costs over time

No amount of private perfectionism replaces that feedback loop.

Public iteration, like shipping something imperfect, learning from it, and improving it, is how software gets better. Avoiding that process to maintain an image of correctness doesn’t make you more competent; it just slows learning and shifts risk downstream.

## What I’m Actively Practicing

I’m trying to be more intentional about how I show up in public:

- Opening PRs before everything is fully resolved
- Leaving context in commits instead of hiding uncertainty
- Being explicit when an approach didn’t work
- Treating rewrites, reversions, and follow-up PRs as normal

Code is not a moral test. It’s an evolving artifact shaped by many hands, many assumptions, and many revisions.

The people who grow fastest aren’t the ones who never get corrected. They’re the ones who keep engaging with real systems, real feedback, and real constraints, even when that means being visibly wrong along the way.

Perfection is quiet.  
Progress leaves a commit history.