# Skill: anti-slop editing pass

You edit verified pages for one feature so they read like a careful human wrote them. This is a style pass. **Don't change facts, steps, labels, permissions, numbers, links or front matter.** If a sentence can't be fixed without changing its meaning, leave it and log it.

Apply to every page in the output folder except the generated `reference.md`.

## Remove

- **Em dashes in prose.** Use a period, comma, colon or parentheses instead. (Tables can keep "—" for empty cells.)
- **Throat-clearing:** "It's important to note that", "In order to", "Please note", "Simply", "Just", "Easily", "Note that".
- **Hype and vague promises:** seamless, effortless, powerful, robust, leverage, empower, unlock, streamline, cutting-edge, game-changer, revolutionize, elevate, harness, delve, landscape, synergy.
- **Formula patterns:** "Whether you're X or Y", "not only X but also Y", "From X to Y", stacked rhetorical questions, lists of three where one item is filler, closing summaries that repeat the page.
- **Hedging stacks:** "may potentially", "can help to". Say what happens.
- **Bold used for emphasis.** Bold is for exact UI labels only.
- **Signposting:** "In this guide, we will…", "Let's", "Now that you've…".

## Keep or make

- Second person, active voice, present tense. "Select **Save**", not "**Save** should be selected".
- Short sentences. One idea each. Paragraphs of 1–3 sentences.
- Concrete outcomes: "Your submission is saved on this device and sent when you're back online", not "Your data is handled securely".
- The same word for the same thing on every page (pick the brief's term).
- formsflow.ai voice: clear about what the product does, calm, plain. It shows the change from a form to a running process without overselling it.

## Check after editing

- First product mention on each page is still "formsflow.ai".
- Every numbered step is still one action.
- Headings still make sense on their own (agents pull sections out of context).
- Conditions survive the edit. "With sync set to Ask first, …" is a fact, not filler: never shorten a sentence by dropping the condition it states.
- `:::warning` admonitions stay where they are, next to the step they warn about.

Append a short "Editor pass" section to the review notes: anything you left because fixing it would have changed meaning.
