const items = [
  {
    id: 1,
    description: "Apple iPad 8th Gen",
    price: 350,
    category: "Smartphones and tabs",
    img: ["",""]    
  },
  {
    id: 2,
    description: "Apple iPad Air",
    price: 380,
    category: "Smartphones and tabs",
    img: "./images/category images/Smartphones and tabs/Apple iPad 8th Gen-1.webp"    
  },
  {
    id: 3,
    description: "Apple iPad Pro M1",
    price: 450,
    category: "Smartphones and tabs",
    img: "./images/category images/Smartphones and tabs/Apple iPad 8th Gen-1.webp"    
  },
  {
    id: 4,
    description: "Apple iPhone 12 Pro Max",
    price: 390,
    category: "Smartphones and tabs",
    img: "./images/category images/Smartphones and tabs/Apple iPad 8th Gen-1.webp"    

  },
  {
    id: 5,
    description: "Apple iPhone SE",
    price: 500,
    category: "Smartphones and tabs",
    img: "./images/category images/Smartphones and tabs/Apple iPad 8th Gen-1.webp"    

  },
];

mainBanner = document.getElementById("mainBanner");

for (let i = 0; i < items.length; i++) {
  mainBanner.innerHTML += `<h1>${items[i].price}</h1>
    <h1>${items[i].category}</h1>
    <h1>${items[i].description}</h1>
    <img src="${items[i].img}"/>`;
}

//   {
//     id: 6,
//     price: 300,
//     category: "Smartphones and tabs",
//     description: "",
//     img: ["", ""],
//   },
//   {
//     id: 7,
//     price: 350,
//     category: "Smartphones and tabs",
//     description: "",
//     img: ["", ""],
//   },
//   {
//     id: 8,
//     price: 450,
//     category: "Smartphones and tabs",
//     description: "",
//     img: ["", ""],
//   },
//   {
//     id: 9,
//     price: 350,
//     category: "Smartphones and tabs",
//     description: "",
//     img: ["", ""],
//   },
//   {
//     id: 10,
//     price: 600,
//     category: "Smartphones and tabs",
//     description: "",
//     img: ["", ""],
//   },
//   {
//     id: 11,
//     price: 304,
//     category: "Smartphones and tabs",
//     description: "",
//     img: ["", ""],
//   },
//   {
//     id: 12,
//     price: 350,
//     category: "Smartphones and tabs",
//     description: "",
//     img: ["", ""],
//   },
//   {
//     id: 13,
//     price: 450,
//     category: "Smartphones and tabs",
//     description: "",
//     img: ["", ""],
//   },
//   {
//     id: 14,
//     price: 250,
//     category: "Smartphones and tabs",
//     description: "",
//     img: ["", ""],
//   },
//   {
//     id: 15,
//     price: 530,
//     category: "Smartphones and tabs",
//     description: "",
//     img: ["", ""],
//   },
//   {
//     id: 16,
//     price: 450,
//     category: "Smartphones and tabs",
//     description: "",
//     img: ["", ""],
//   },
//   {
//     id: 17,
//     price: 650,
//     category: "Smartphones and tabs",
//     description: "",
//     img: ["", ""],
//   },
//   {
//     id: 18,
//     price: 700,
//     category: "Smartphones and tabs",
//     description: "",
//     img: ["", ""],
//   },
//   {
//     id: 19,
//     price: 450,
//     category: "Smartphones and tabs",
//     description: "",
//     img: ["", ""],
//   },
//   {
//     id: 20,
//     price: 480,
//     category: "Smartphones and tabs",
//     description: "",
//     img: ["", ""],
//   },
//   {
//     id: 21,
//     price: 540,
//     category: "Smartphones and tabs",
//     description: "",
//     img: ["", ""],
//   },
//   {
//     id: 22,
//     price: 320,
//     category: "Smartphones and tabs",
//     description: "",
//     img: ["", ""],
//   },
//   {
//     id: 23,
//     price: 450,
//     category: "Smartphones and tabs",
//     description: "",
//     img: ["", ""],
//   },
//   {
//     id: 24,
//     price: 500,
//     category: "Smartphones and tabs",
//     description: "",
//     img: ["", ""],
//   },
//   {
//     id: 25,
//     price: 740,
//     category: "Smartphones and tabs",
//     description: "",
//     img: ["", ""],
//   },
// ];
