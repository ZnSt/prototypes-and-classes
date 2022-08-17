// const Car = function ({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.sayHi = function () {
//   console.log(`this: `, this);
//   console.log("Hello!");
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// const myCar = new Car({
//   brand: "BMW",
//   model: "M5",
//   price: 40000,
// });
// console.log(myCar);

// myCar.sayHi();
// myCar.changePrice(50000);

// const myCar2 = new Car({
//   brand: "Audi",
//   model: "Q7",
//   price: 60000,
// });
// console.log(myCar2);
// myCar2.sayHi();
// myCar2.changePrice(50000);

// const myCar3 = new Car({
//   brand: "RRs",
//   model: "Qullian",
//   price: 100000,
// });
// console.log(myCar3);
// myCar3.sayHi();
// myCar3.changePrice(50000);

// const User = function ({ email, password } = {}) {
//   this.email = email;
//   this.password = password;
// };

// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail;
// };

// const mango = new User({ email: "mango@gmail.com", password: 11111 });
// mango.changeEmail("ajax@gmail.com");

// // console.log(mango);

// User.message = "Я не статическое свойство, меня нет на экземпляре";
// User.logInfo = function (obj) {
//   console.log(obj);
// };
// console.dir(User);
// User.logInfo(mango);

// Выводы:

// 1. У каждого объекта есть свойтво __proto__;
// 2. В этом ствойстве лежит ссылка на его ПРОТОТИП, то есть другой объект;
// 3. При создании литерала объекта, в свойство __proto__ записывается ссылка на Функция.prototype;
// 4. Функция-конструктор это пргосто функция;
// 5. Вся магина выполняется благодаря оператору new;
// 6. Если функция выполняется через new, создается пустой объект;
// 7. Функция-конструктор вызывается в контексте созданного объекта, то есть ее this ссылается на тот объект;
// 8. В свойство this.__proto__ записывается ссылка на объект Функция.prototype;
// 9. Ссылка на объект возвращается в место вызова new Функция();

const User = function ({ name, heigth, colorEyes } = {}) {
  (this.name = name), (this.heigth = heigth), (this.colorEyes = colorEyes);
};

User.prototype.changeColorEyes = function (changeColor) {
  this.colorEyes = changeColor;
};

const paramUser1 = new User({
  name: "Steve",
  heigth: 1.8,
  colorEyes: "blue",
});
console.log("🚀: paramUser1", paramUser1);

paramUser1.changeColorEyes("black");

User.getInfo = function (obj) {
  console.log(obj);
};
User.getInfo(paramUser1);

const paramUser2 = new User({
  name: "Josh",
  heigth: 1.75,
  colorEyes: "green",
});
console.log("🚀: paramUser2", paramUser2);

paramUser2.changeColorEyes("red");
