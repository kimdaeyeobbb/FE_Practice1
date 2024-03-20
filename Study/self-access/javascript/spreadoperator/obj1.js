const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  ...obj1,
  c: 3,
};

console.log(obj2);
// { a: 1, b: 2, c: 3 }
