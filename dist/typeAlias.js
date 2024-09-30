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
function move(animal) {
    var _a;
    if ('swim' in animal) {
        (_a = animal.swim) === null || _a === void 0 ? void 0 : _a.call(animal); //undefined가 안뜨고 swim일 때만 뜨게한다
    }
}
let f = { swim: () => console.log('swimming') };
move(f);
