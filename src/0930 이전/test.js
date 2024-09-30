// function sum (a:number, b:number) {
// 	console.log(a+b)
// }
var person = {
    name: '김사람',
    age: 20
};
var expert = {
    name: '김개발',
    skills: ['javascript', 'react']
};
var people = [person, expert];
people.forEach(function (p) { return console.log(p.name); });
