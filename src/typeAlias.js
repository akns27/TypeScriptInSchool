// type Person = {
//   name: string;
//   age?: number; // 설정을 해도 되고 안해도 되는 값};
// type Developer = Person & {
//   skills: string[];
// };
// const person: Person = {
//   name: '김사람'
// };
// const expert: Developer = {
//   name: '김개발',
//   skills: ['javascript', 'react']
// };
// type People = Person[];
// const people: People = [person, expert];
// people.forEach((p)=>console.log(p.name));
var _a, _b;
var user1 = { name: "Alice" };
var user2 = { name: "Bob", address: { city: "New York" } };
console.log((_a = user1.address) === null || _a === void 0 ? void 0 : _a.city); // undefined
console.log((_b = user2.address) === null || _b === void 0 ? void 0 : _b.city); // "New York"
