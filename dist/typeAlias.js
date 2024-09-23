"use strict";
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
function getOrderId(step) {
    return step.orderId;
}
let a;
