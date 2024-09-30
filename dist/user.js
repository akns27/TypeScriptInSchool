"use strict";
class User {
    // 생성자 함수
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // 메서드 정의
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
    getAge() {
        return this.age;
    }
}
// 객체 생성 및 메서드 호출
const user = new User("Alice", 25);
user.greet(); // "Hello, my name is Alice"
// user.age();
