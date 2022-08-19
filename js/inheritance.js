// class Hero {
//   constructor({ name = "hero", xp = 0 } = {}) {
//     this.name = name;
//     this.xp = xp;
//   }

//   gainXp(amount) {
//     console.log(`${this.name} получает ${amount} опыта`);
//     this.xp += amount;
//   }
// }

// class Warrior extends Hero {
//   constructor({ name, xp, weapon }) {
//     super({ name, xp });
//     this.weapon = weapon;
//   }

//   attack() {
//     console.log(`${this.name} аттакует используя ${this.weapon}`);
//   }
// }

// class Mage extends Hero {
//   constructor({ name, xp, power }) {
//     super({ name, xp });
//     this.power = power;
//   }

//   magePower() {
//     console.log(`${this.name} использует ${this.power} для атаки`);
//   }
// }

// class Berserk extends Warrior {
//   constructor({ name, xp, skill, weapon }) {
//     super({ name, xp, weapon });
//     this.skill = skill;
//   }

//   getSkill() {
//     console.log(`${this.name} овладел ${this.skill}`);
//   }
// }
// const mango = new Warrior({ name: "Mango", xp: 1000, weapon: "амбарда" });
// console.log(mango);

// mango.attack();
// mango.gainXp(1000);

// const poly = new Mage({ name: "Poly", xp: 500, power: "владение огнем" });
// console.log(mango);
// poly.magePower();
// poly.gainXp(2000);

// const ajax = new Berserk({ name: "Ajax", xp: 4000, skill: "безупречной силой", weapon: "axe" });
// console.log(ajax);
// ajax.getSkill();
// ajax.attack();
// ajax.gainXp(50000);

// class Worker {
//   constructor({ name, surname, rate, days }) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }

//   logFullName() {
//     console.log(`${this.name} ${this.surname}`);
//   }

//   logSalary() {
//     const salary = this.rate * this.days;
//     console.log(`${this.name} a salary ${salary}`);
//   }
// }

// const workerData = new Worker({ name: "Ivan", surname: "Popov", rate: 1500, days: 20 });
// console.log(workerData);
// workerData.logFullName();
// workerData.logSalary();

// class Boss extends Worker {
//   constructor({ workersCount, ...commonData }) {
//     super(commonData);
//     this.workersCount = workersCount;
//   }

//   logSalary() {
//     const salary = this.rate * this.days * this.workersCount;
//     console.log(`${this.name} a salary ${salary}`);
//   }
// }

// const bossData = new Boss({
//   name: "Alexander",
//   surname: "Izhevich",
//   rate: 1000,
//   days: 20,
//   workersCount: 5,
// });
// console.log(bossData);
// bossData.logFullName();
// bossData.logSalary();
