class Car {
  static description = "это собвственный статический метод";

  #test = "test";

  constructor({ brand, model, price } = {}) {
    this.brand = brand;
    this._model = model;
    this._price = price;
  }

  get model() {
    return this._model;
  }

  set model(newModel) {
    return (this._model = newModel);
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    return (this._price = newPrice);
  }
}

const myCar1 = new Car({
  brand: "BMW",
  model: "M5",
  price: 50000,
});
console.log(myCar1.model);
console.log(myCar1.price);

myCar1.model = "X5";
console.log(myCar1.model);

myCar1.price = 10000;
console.log(myCar1.price);
