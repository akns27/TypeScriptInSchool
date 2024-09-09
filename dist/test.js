"use strict";
// function sum (a:number, b:number) {
// 	console.log(a+b)
// }
const person = {
    name: '김사람',
    age: 20
};
const expert = {
    name: '김개발',
    skills: ['javascript', 'react']
};
const people = [person, expert];
people.forEach((p) => console.log(p.name));
