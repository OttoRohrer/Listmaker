export const groups = [
  {
    name: "Apple Pie",
    quantity: 0,
    acronym: "AP",
    ID: 666,
    store: [
      {
        ID: 234,
        quantity: 1,
        parentIDs: [723]

      },
      {
        ID: 376,
        quantity: 7,
        parentIDs: [584, 723]
      }
    ],
    home: [
      {
        ID: 177,
        quantity: 9,
        parentIDs: [723]

      },
      {
        ID: 999,
        quantity: 4,
        parentIDs: [584]

      },
      {
        ID: 43,
        quantity: 1,
        parentIDs: []
      }
    ]
  }
]


export const items = [{
  name: "Dates",
  DD: 1.1,
  quantity: 3,
  tags: ["snacks"],
  ID: 376
}, {
  name: "Apples",
  DD: 9.2,
  quantity: 4,
  tags: ["snacks", "fruit"],
  ID: 234
}, {
  name: "Bananas",
  DD: 3.3,
  quantity: 1000,
  tags: ["snacks", "fruit"],
  ID: 177
}, {
  name: "Sugar",
  DD: 4.1,
  quantity: 5,
  tags: ["snacks"],
  ID: 999
}, {
  name: "Cinnamon",
  DD: 9.9,
  quantity: 0,
  tags: ["spices"],
  ID: 43
}]