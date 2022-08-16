const Car = function ({ brand, model, price } = {}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
};

Car.prototype.sayHi = function () {
  console.log(`this: `, this);
  console.log("Hello!");
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

const myCar = new Car({
  brand: "BMW",
  model: "M5",
  price: 40000,
});
console.log(myCar);

myCar.sayHi();
myCar.changePrice(50000);

const myCar2 = new Car({
  brand: "Audi",
  model: "Q7",
  price: 60000,
});
console.log(myCar2);
myCar2.sayHi();
myCar2.changePrice(50000);

const myCar3 = new Car({
  brand: "RRs",
  model: "Qullian",
  price: 100000,
});
console.log(myCar3);
myCar3.sayHi();
myCar3.changePrice(50000);
