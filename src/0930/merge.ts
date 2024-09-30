function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b//spread
  };
}
const merged = merge({ foo: 1 }, { bar: 1 });//객체로 결합
console.log(merged);

function wrap<T>(param: T) {
  return {
    param
  }
}

const wrapped = wrap(10);

console.log(wrapped);