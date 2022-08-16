const objC = {
  z: 5,
};
console.log(`objC: `, objC);

const objB = Object.create(objC);
objB.y = 2;
console.log(`objB: `, objB);

const objA = Object.create(objB);
objA.x = 1;
console.log(`objA: `, objA.z);
