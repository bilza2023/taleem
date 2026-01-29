
export const goldenDeckV1 = {
    "version": "deck-v1",
    "name": "EQ Gold Standard – Progressive Explanation",
  
    "background": {
      "backgroundColor": "#111111"
    },
  
    "deck": [
      {
        "type": "titleSlide",
        "start": 0,
        "end": 8,
        "data": [
          {
            "name": "title",
            "content": "Understanding an Equation Step by Step",
            "showAt": 0
          },
          {
            "name": "subtitle",
            "content": "How EQ slides work in Taleem",
            "showAt": 2
          }
        ]
      },
  
      {
        "type": "eq",
        "start": 10,
        "end": 40,
        "data": [
          {
            "name": "line",
            "content": "We start with a simple expression",
            "showAt": 10
          },
          {
            "name": "line",
            "content": "$(a + b)^2$",
            "showAt": 18,
            "spItems": [
              {
                "type": "spText",
                "content": "This is a binomial squared. We will expand it step by step."
              }
            ]
          }
        ]
      },
  
      {
        "type": "eq",
        "start": 42,
        "end": 85,
        "data": [
          {
            "name": "line",
            "content": "$(a + b)^2$",
            "showAt": 42
          },
          {
            "name": "line",
            "content": "Multiply each term",
            "showAt": 52,
            "spItems": [
              {
                "type": "spText",
                "content": "Each term in the first bracket multiplies every term in the second bracket."
              }
            ]
          },
          {
            "name": "line",
            "content": "$= a(a + b) + b(a + b)$",
            "showAt": 62
          }
        ]
      },
  
      {
        "type": "eq",
        "start": 87,
        "end": 130,
        "data": [
          {
            "name": "line",
            "content": "$= a^2 + ab + ab + b^2$",
            "showAt": 87
          },
          {
            "name": "line",
            "content": "Combine like terms",
            "showAt": 100,
            "spItems": [
              {
                "type": "spText",
                "content": "The two middle terms are both $ab$, so they can be added together."
              }
            ]
          },
          {
            "name": "line",
            "content": "$= a^2 + 2ab + b^2$",
            "showAt": 112
          }
        ]
      },
  
      {
        "type": "quoteSlide",
        "start": 132,
        "end": 150,
        "data": [
          {
            "name": "quote",
            "content": "Equations are best understood when each step is seen and explained clearly.",
            "showAt": 132
          }
        ]
      }
    ]
  }
  