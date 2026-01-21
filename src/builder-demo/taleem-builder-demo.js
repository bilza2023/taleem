import TaleemBuilder from "./TaleemBuilder.js";

export default function buildDemoDeck() {
  const builder = new TaleemBuilder({ mode: "mobile" });

  builder.addDetails({ name: "demo" });

  // ─────────────────────────
  // Slide 1: Title
  // ends at 8
  // ─────────────────────────
  builder.titleAndSubtitle(8, [
    { name: "title", content: "Algebra Basics", showAt: 0 },
    { name: "subtitle", content: "Taleem Builder Demo", showAt: 2 }
  ]);

  // ─────────────────────────
  // Slide 2: Bullets (intro)
  // ends at 18
  // ─────────────────────────
  builder.bulletList(18, [
    { name: "bullet", content: "Algebra deals with numbers and symbols", showAt: 8 },
    { name: "bullet", content: "Symbols are usually letters", showAt: 11 },
    { name: "bullet", content: "These letters are called variables", showAt: 14 }
  ]);

  // ─────────────────────────
  // Slide 3: EQ slide
  // ends at 38
  // ─────────────────────────
  builder.eq(38, [
    {
      type: "text",
      content: "An algebraic expression combines numbers and variables.",
      showAt: 18
    },
    {
      type: "math",
      content: "3x + 5",
      showAt: 24
    },
    {
      type: "math",
      content: "2a - 7b",
      showAt: 30
    },
    {
      type: "spText",
      content: "Variables represent unknown values"
    }
  ]);

  // ─────────────────────────
  // Slide 4: Bullets (wrap-up)
  // ends at 52
  // ─────────────────────────
  builder.bulletList(52, [
    { name: "bullet", content: "Expressions can be simplified", showAt: 38 },
    { name: "bullet", content: "Like terms can be combined", showAt: 43 },
    { name: "bullet", content: "Algebra helps solve real problems", showAt: 48 }
  ]);

  const deck = builder.build();
  console.log("BUILDER → deck", deck);

  return deck;
}
