export const goldenDeckV1 = {
    version: "deck-v1",
    name: "Taleem Golden Deck – Player Demo",
  
    background: {
      backgroundColor: "#111111",
      backgroundImage: null,
      backgroundImageOpacity: 0.3
    },
  
    deck: [
      {
        type: "titleSlide",
        start: 0,
        end: 5,
        data: [
          { name: "title", content: "Taleem Player", showAt: 0 }
        ]
      },
  
      {
        type: "titleAndSubtitle",
        start: 5,
        end: 10,
        data: [
          { name: "title", content: "Time-Driven Slides", showAt: 5 },
          { name: "subtitle", content: "Not index. Not state.", showAt: 6 }
        ]
      },
  
      {
        type: "bulletList",
        start: 10,
        end: 15,
        data: [
          { name: "bullet", content: "Slides live on a timeline", showAt: 11 },
          { name: "bullet", content: "Time decides visibility", showAt: 12 },
          { name: "bullet", content: "Player is deterministic", showAt: 13 }
        ]
      },
  
      {
        type: "twoColumnText",
        start: 15,
        end: 20,
        data: [
          { name: "left", content: "Browser Mode\n(index-based)", showAt: 15 },
          { name: "right", content: "Player Mode\n(time-based)", showAt: 17 }
        ]
      },
  
      {
        type: "imageLeftBulletsRight",
        start: 20,
        end: 25,
        data: [
          { name: "image", content: "box.webp", showAt: 20 },
          { name: "bullet", content: "Time comes from the app", showAt: 21 },
          { name: "bullet", content: "renderAt(time) is pure", showAt: 22 }
        ]
      },
  
      {
        type: "imageRightBulletsLeft",
        start: 25,
        end: 30,
        data: [
          { name: "image", content: "box.webp", showAt: 25 },
          { name: "bullet", content: "No internal clock", showAt: 26 },
          { name: "bullet", content: "No play / pause here", showAt: 27 }
        ]
      },
  
      {
        type: "table",
        start: 30,
        end: 35,
        data: [
          { name: "header", content: ["Layer", "Role"], showAt: 30 },
          {
            name: "row",
            content: [
              ["taleem-core", "Schema + canonical decks"],
              ["taleem-slides", "HTML rendering"],
              ["taleem-player", "Time → slide"]
            ],
            showAt: 31
          }
        ]
      },
  
      {
        type: "statistic",
        start: 35,
        end: 40,
        data: [
          { name: "number", content: "21", showAt: 35 },
          { name: "label", content: "Core Slide Types", showAt: 36 }
        ]
      },
  
      {
        type: "quoteSlide",
        start: 40,
        end: 45,
        data: [
          { name: "quote", content: "Time belongs to the app.", showAt: 41 },
          { name: "author", content: "— Taleem Architecture", showAt: 43 }
        ]
      },
  
      {
        type: "eq",
        start: 45,
        end: 50,
        data: [
          {
            name: "line",
            type: "heading",
            content: "Determinism",
            showAt: 45
          },
          {
            name: "line",
            type: "math",
            content: "renderAt(t) ⇒ same output",
            showAt: 47
          }
        ]
      },
  
      {
        type: "titleAndPara",
        start: 50,
        end: 55,
        data: [
          { name: "title", content: "Result", showAt: 50 },
          {
            name: "para",
            content: "Progressive slides work when timing is correct.",
            showAt: 52
          }
        ]
      }
    ]
  };
  