import { DayContent } from "./types";

export const DAY_CONTENT: DayContent[] = [
    {
      date: new Date('2025-01-11T00:00:00-05:00'),
      sandwich: [
        { id: "1", imageUrl: "/sandwiches/utopia-bec-jan-11-25.png", description: "Bacon egg and cheese with a hash brown on an everything bagel" }
      ],
      rating: [
        { rating: 4, description: "perfect combination and the hash brown was so good" }
      ],
      location: [
        { name: "utopia bagels", url: "https://www.utopiabagelsny.com" }
      ]
    },
    {
        date: new Date('2025-12-08T00:00:00-05:00'),
        sandwich: [
          { id: "1", imageUrl: "/sandwiches/grabsteins-bec-dec-8-24.png", description: "Bacon egg and cheese with a hash brown on an everything bagel" }
        ],
        rating: [
          { rating: 4, description: "one of my go-to favorites lately" }
        ],
        location: [
          { name: "grabsteins bagels", url: "https://grabsteinsbagels.square.site" }
        ]
    },
]