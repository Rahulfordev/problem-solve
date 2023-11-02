const phones = [
  {
    id: 1,
    model: "samsung a12",
    brand: "Samsung",
    price: 25000,
  },
  {
    id: 2,
    model: "Mi note 10 pro",
    brand: "xiaomi",
    price: 20000,
  },
  {
    id: 3,
    model: "Oppo a20",
    brand: "Oppo",
    price: 15000,
  },
  {
    id: 4,
    model: "Itel s22 plus",
    brand: "Itel",
    price: 13000,
  },
  {
    id: 5,
    model: "Apple 15 pro max",
    brand: "Apple",
    price: 250000,
    camera: {
      font: 15,
      back: 48,
    },
  },
];

for (const phone of phones) {
  if ("camera" in phone) {
    const {
      id,
      model,
      brand,
      price,
      camera: { font, back },
    } = phone;
    console.log(id, model, brand, price, font, back);
  } else {
    const { id, model, brand, price } = phone;
    console.log(id, model, brand, price);
  }
}
