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

// type Color = 'red' | 'orange' | 'yellow';
// const color: Color = 'red';
// const colors: Color[] = ['red', 'orange'];

// colors.forEach((c)=>console.log(c));

// let id: number | string;

// id = 101;        // number 타입
// id = "A101";     // string 타입
// // id = true;    // 오류 발생: 'boolean' 타입은 'number | string'에 할당될 수 없습니다.
// function printId(id: number | string) {//유니온 타입으로 지정
//     console.log(`ID: ${id}`);
// }

// printId(123);       // 출력: ID: 123
// printId("ABC123");  // 출력: ID: ABC123

// function getLength(value: string | number): number {//리턴타입 넘버
//     if (typeof value === "string") {
//         // value가 string 타입인 경우
//         return value.length;
//     } else {
//         // value가 number 타입인 경우
//         return value.toString().length;
//     }
// }

// console.log(getLength("hello"));  // 출력: 5
// console.log(getLength(12345));    // 출력: 5

// let mixedArray: (number | string)[] = [1, "two", 3, "four"];

// mixedArray.push(5);       // 배열에 number 타입 요소 추가
// mixedArray.push("six");   // 배열에 string 타입 요소 추가
// // mixedArray.push(true); // 오류 발생: 'boolean' 타입은 'number | string'에 할당될 수 없습니다.

// 유니온 타입

// interface CookingStep{
//   orderId:string;
//   price:string;
// }
// interface DeliveryStep{
//   orderId:string;
//   time:number;
//   distance:string;
// }
// function getOrderId(step:CookingStep|DeliveryStep){
//   return step.orderId;
// }

// type DeliveryProcess = CookingStep & DeliveryStep;
// let a : DeliveryProcess;

// 유니온타입, 교차타입

// type A = {
//   tip:number;
// }
// type B = A&{
//   tip:string;
// }
// let x : B;

// x.tip   // x.tip의 타입은?? => never type되버림

// interface Shape {
//   color: string;
// }

// interface Shape{
//   corner: number;
// }

// interface Square extends Shape {
//   sideLength: number;
// }

// type Shape = {
//   color: string;
// };

// type Shape = {
//   corner: number;
// }

// type Square = Shape & {
//   sideLength: number;
// };


// type DestinationCode = "A" | "B" | "C";
// //const testCodeList: DestinationCode [] = [ "B", "C", "D", "E", "F", "G"]
// const testCodeList = [ "B", "C", "D", "E", "F", "G"];
// const destinationCodeList = [ "A", "B", "C"];
// const isDestinationCode = (x:string) : x is DestinationCode => destinationCodeList.includes(x); //is 사용
// testCodeList.map( (item)=>{
//   if(isDestinationCode(item)){
//     console.log(item);
//   }
// })

// function checkNonNullable<T>(value:T):value is NonNullable<T>{
//   return value !== null && value !== undefined;
// }
// const a = null;
// const b:string = 'hello';
// if(checkNonNullable(a)){
//   console.log(a);
// }else if( checkNonNullable(b)){
//   console.log(b);
// }

// function isString(value: string | number) : value is string{
//   return typeof value === "string";
// }

// function printId(id: number | string) {
//   if(typeof id === "string"){
//     return id.toUpperCase();
//   }else{
//     return id.toFixed(2);
//   }
// }

// console.log(printId('hello'));
// console.log(printId(234.2334));

// interface User {
//   name: string;
//   address?: {
//       city?: string;
//       street?: string;
//   };
// }

// const user1: User = { name: "Alice" };
// const user2: User = { name: "Bob", address: { city: "New York" } };

// console.log(user1.address?.city); // undefined
// console.log(user2.address?.city); // "New York"

//optional chaining

// const arr: number[] = [1, 2, 3];
// console.log(arr?.[1]); // 2
// const emptyArr: number[] | undefined = undefined;
// console.log(emptyArr?.[1]); // undefined, 오류 없이 undefined 반환
// type Config = {
//     callback?: () => void;
// };
// const configWithCallback: Config = {
//     callback: () => console.log("Callback called!"),
// };
// const configWithoutCallback: Config = {};
// configWithCallback.callback?.();  // "Callback called!" 출력
// configWithoutCallback.callback?.();  // 아무것도 출력되지 않음

type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

function move( animal : Fish | Bird | Human ){
  if('swim' in animal){
    animal.swim?.();//undefined가 안뜨고 swim일 때만 뜨게한다
  }
    
}

let f : Fish = { swim : () => console.log('swimming')};
move(f);

