
# Taleem Browser — Demo Project
## Work in progess please expect things broken ---17-Jan-2026

This repository is a **pure demo & showcase project** for the Taleem presentation system.

It demonstrates **how Taleem decks are played in the browser**, not how they are authored or built.

This distinction is intentional and important.

---

## 🎯 Purpose

This project exists to prove that:

- Taleem decks are **portable JSON documents**
- Slide playback is **externally controllable**
- Navigation logic is **UI-agnostic**
- No framework (React, Svelte, Vue, etc.) is required
- A browser can act as a **deterministic slide viewer**

This repository intentionally avoids:

- Deck building
- Timeline interpretation
- Authoring tools
- Editors
- Backend services

---

## 📦 Dependencies

Runtime dependency:

```json
"dependencies": {
  "taleem-browser": "^0.1.0"
}
````

Notes:

* `taleem-browser` is the **only required dependency**
* Decks are **prebuilt JSON files**
* `taleem-slides` is **not** used directly here (by design)

This repo demonstrates **playback only**, not construction.

---

## 🧪 Demo Pages

Each demo page is a **self-contained behavioral experiment**.

Rule:

> **One HTML file = one playback behavior**

### Included demos

**Arrow Keys Demo**

* Discrete slide navigation
* Keyboard-driven control

**Autoplay Demo**

* Time-based slide advancement
* External timer driving navigation

**Range / Scrub Demo**

* Continuous external control
* Slide index mapped to UI state

Each demo answers exactly one question:

> “Can the Taleem browser be controlled this way?”

If the answer is “yes”, the demo is complete.

---

## 🧠 Design Philosophy

* Slides are treated as **documents**, not videos
* Index-based navigation is fundamental
* Time is **optional metadata**, not a requirement
* Playback logic must be **explicit and observable**
* Demos must be:

  * small
  * isolated
  * deterministic

This repository acts simultaneously as:

* Documentation
* Regression suite
* Teaching reference
* API usage examples

---

## 🚫 What Is Intentionally Missing

The following are **explicitly out of scope** for this repo:

* Interpreting `start`, `end`, or `showAt`
* Full presentation timelines
* Narration or audio sync
* Animations or transitions
* Editors or authoring tools

Those concerns belong to **separate layers** and **future stages**.

---

## 🧊 Project Status

**Feature-complete for its intended scope.**

Future changes should only include:

* New demo pages
* New playback control experiments

Core behavior is considered **stable**.

This file should be treated as **locked** unless the project scope changes.

---

## 🔗 Important Links

* **Demo project (this repository)**
  [https://github.com/bilza2023/taleem](https://github.com/bilza2023/taleem)

* **taleem-browser — runtime slide player**
  [https://github.com/bilza2023/taleem-browser](https://github.com/bilza2023/taleem-browser)

* **taleem-slides — slide renderer**
  [https://github.com/bilza2023/taleem-slides](https://github.com/bilza2023/taleem-slides)

* **taleem-core — schemas & rules**
  [https://github.com/bilza2023/taleem-core](https://github.com/bilza2023/taleem-core)

* **Gold-standard example deck**
  [https://github.com/bilza2023/taleem/blob/master/decks/demo-gold.json](https://github.com/bilza2023/taleem/blob/master/decks/demo-gold.json)

---

## 📜 License

MIT