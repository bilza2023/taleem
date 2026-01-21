
# Taleem Demo App
## Stable integration demo · January 2026

This repository is the **official integration demo** for the Taleem presentation ecosystem.

It demonstrates how **Taleem Core–compliant JSON decks** are rendered and played
in real browsers using the published Taleem libraries.

Everything here is **real, working, and intentionally simple**.

---

## 🎯 Purpose

This project exists to validate that:

- Taleem decks are **portable, schema-defined JSON documents**
- Slides can be rendered deterministically as HTML
- Playback can be:
  - index-based (manual navigation)
  - time-based (player-driven)
- Rendering and playback are **framework-agnostic**
- A browser can act as a **complete presentation runtime**

This repository is about **integration and behavior**, not tooling.

---

## 📦 Dependencies

This demo uses **only released 1.0 packages**:

```json
{
  "dependencies": {
    "taleem-core": "^1.0.0",
    "taleem-slides": "^1.0.0",
    "taleem-player": "^1.0.0"
  }
}
````

Notes:

* `taleem-core` defines the schema and rules
* `taleem-slides` renders slides to HTML
* `taleem-player` controls browser and time-based playback

No local packages.
No unpublished APIs.
This mirrors **real consumer usage**.

---

## 🧪 Demo Pages

Each demo page is a **small, focused experiment**.

Rule:

> **One page = one playback behavior**

Typical demos include:

* Manual slide navigation (index-based)
* Time-driven playback using `createTaleemPlayer`
* External UI controls driving the player
* Visual verification of real Taleem decks

If a behavior works here, it is considered **production-valid**.

---

## 🧠 Design Principles

* Decks are treated as **documents**, not videos
* Rendering and playback are **separate concerns**
* Time metadata (`start`, `end`, `showAt`) is:

  * optional
  * explicit
  * never guessed or auto-corrected
* All behavior must be:

  * observable
  * deterministic
  * debuggable in plain HTML + JS

This demo intentionally avoids abstraction layers.

---

## 🚫 What This Repo Does NOT Do

This demo does **not** include:

* Deck authoring or builders
* Editors or visual tooling
* Backend services
* Asset generation pipelines

Those concerns live in **separate projects**.

This app is about **playing**, not **making**.

---

## 🧊 Project Status

**Stable and feature-complete for its intended purpose.**

Future changes may include:

* Additional demo pages
* New playback experiments
* Visual inspection aids

Core integration behavior is considered **locked**.

---

## 🔗 Related Projects

* **Taleem Core** — schemas and rules
  [https://github.com/bilza2023/taleem-core](https://github.com/bilza2023/taleem-core)

* **Taleem Slides** — JSON → HTML renderer
  [https://github.com/bilza2023/taleem-slides](https://github.com/bilza2023/taleem-slides)

* **Taleem Player** — browser & time-based runtime
  [https://github.com/bilza2023/taleem-player](https://github.com/bilza2023/taleem-player)

---

## 📜 License

MIT
