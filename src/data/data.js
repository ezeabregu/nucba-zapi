export const foodItems = [
  {
    name: 'Pizza Rica',
    img: 'img/pizzaHuevo.jpg',
    section: 'Pizzas',
  },
  {
    name: 'Pizza Mix',
    img: 'img/pizzaTomate.jpg',
    section: 'Pizzas',
  },
  {
    name: 'Hamburguesa Doble',
    img: 'img/burgerCoca.jpg',
    section: 'Hamburguesas',
  },
  {
    name: 'Hamburguesa Triple',
    img: 'img/burgerDoble.jpg',
    section: 'Hamburguesas',
  },
  {
    name: 'Hamburguesa Black',
    img: 'img/burgerNegra.jpg',
    section: 'Hamburguesas',
  },
  {
    name: 'Sanguche Salame',
    img: 'img/sandwichSalame.jpg',
    section: 'Sanguches',
  },
  {
    name: 'Sanguche Jamón',
    img: 'img/sandwichJamon.jpg',
    section: 'Sanguches',
  },
];

export const Foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section] = [...res[food.section], food];

  return res;
}, {});
