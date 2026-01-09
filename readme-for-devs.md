# Taleem – Technical Architecture

> **Audience:** Developers / maintainers
>
> This document explains the internal architecture of the Taleem application. It is **not** user‑facing documentation. The focus is on design rules, module boundaries, and invariants that must not be violated.

---

## 1. Project Renaming

The demo application previously called **taleem-html** is now renamed to:

> **taleem**

This repository is the **reference host application** for the Taleem slide system. It demonstrates how the engine, slides, CSS, and playback logic fit together.

---

## 2. High‑Level Architecture

The system is intentionally split into small, sharply defined parts:

```
Deck JSON (deck-v1)
      ↓
Interpreter (taleem-slides)
      ↓
Slide Objects
      ↓
Player (time source)
      ↓
HTML Output
      ↓
CSS (visual behavior)
```

Each layer has **one job only**.

---

## 3. Core Design Invariants (DO NOT BREAK)

These rules define the system. If any of them are violated, complexity and bugs will grow exponentially.

### 3.1 Slides Are Pure Functions

**Hard rule:**

```
HTML = f(currentTime, slideData)
```

* Slides do **not** store time internally
* Slides do **not** remember previous renders
* The same `slideData` + same `currentTime` must always produce identical HTML

Slides are *stateless evaluators*, not actors.

---

### 3.2 `currentTime` Is Ephemeral

* `currentTime` is passed **only** into `render(currentTime)`
* It is never stored on the slide object
* It is never cached
* It is never shared between methods

This ensures:

* reverse playback works
* scrubbing works
* testing is trivial

---

### 3.3 The Player Is Dumb (By Design)

The Player:

* owns the **time source** (ticker, RAF, external clock, etc.)
* calls `slide.render(currentTime)`
* injects returned HTML into the DOM

The Player **must not**:

* interpret `showAt`
* assign or modify class names
* understand slide structure
* contain slide‑specific logic

It is an orchestrator, not a renderer.

---

### 3.4 CSS Owns Visual Meaning

* Slides emit **class names**
* CSS defines what those classes *look like*
* CSS never contains timing logic

This separation allows visual redesign without touching logic.

---

## 4. What `showAt` Means

### 4.1 External Meaning (App / Player Perspective)

From outside **taleem-slides**:

* `showAt` is opaque slide data
* The app never reads or interprets it
* The app only ensures the CSS for emitted classes is loaded

Externally:

> **`showAt` ⇒ “HTML shape varies with time”**

Nothing more.

---

### 4.2 Internal Meaning (Inside a Slide)

Inside a slide object:

* `showAt` represents an **activation threshold**
* Activation is evaluated as:

```
isActive = currentTime >= showAt
```

What *activation does visually* depends on the slide type.

Examples:

* bullet list → active bullet highlighted, others dimmed
* title slide → future items hidden
* image slide → fade‑in
* EQ slide → focused line, blurred context

Important:

> Slides decide **how to react after activation**, not **what activation means**.

---

## 5. Slide Types vs EQ Slides

Normal slides and EQ slides share the same contract:

```
HTML = f(currentTime, slideData)
```

Differences:

| Normal Slides     | EQ Slides        |
| ----------------- | ---------------- |
| Layout‑driven     | Sequence‑driven  |
| Few items         | Many items       |
| Simple activation | Rich focus logic |

EQ slides are a **slide family**, not an exception to the architecture.

---

## 6. Class Name Stability Rule

Slides may **add** new class names over time.

Slides must **never**:

* remove existing class names
* change the meaning of existing class names

This guarantees:

* backward compatibility
* old decks continue to render correctly
* CSS can evolve safely

---

## 7. Testing Philosophy

Because slides are pure:

* No timers are required
* No DOM mutation is required
* No mocks are required

Testing is done by:

```
render(time = 0)
render(time = 5)
render(time = 10)
```

And asserting:

* which classes appear
* which items are active / dimmed / hidden

This makes regression testing cheap and reliable.

---

## 8. Why This Architecture Was Chosen

This design intentionally avoids:

* framework‑level reactivity
* hidden state
* lifecycle complexity
* slide orchestration logic

It enables:

* deterministic rendering
* multiple future players (scroll, video, PDF, static export)
* long‑term stability of `deck-v1`

---

## 9. Summary (Mental Model)

* **Slides**: pure evaluators
* **Player**: time source only
* **CSS**: visual meaning
* **App**: host shell
* **`showAt`**: activation threshold

If these rules are respected, the system remains simple, testable, and extensible for years.

---

> This document is the authoritative reference for Taleem’s internal architecture.
