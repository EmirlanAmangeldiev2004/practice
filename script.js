//todo Array

//! reduce
// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((acc, el) => {
//   return acc + el;
// });
// console.log(result);

//! filter
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = arr.filter((el) => {
//   return el > 5;
// });
// console.log(result);

//! map
// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr = arr.map((el) => {
//   return el * 2;
// });
// console.log(arr);

//! find
// let arr = [2, 2, 3, 5, 2, 5, 3, 7];
// arr = arr.find((el) => el === 5);
// console.log(arr);

//! sort
// let arr = [3, 6, 2, 7, 8, 4, 1, 33];
// let res = arr.sort((a, b) => a - b);
// console.log(res);

// let arr = ["Bilal", "Nurzhigit", "Akbuura", "Gulzina"];
// let res = arr.sort((a, b) => b.localeCompare(a))
// console.log(res);

//! forEach
// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.forEach((el) => {
//   <div>
//     <h2>{elz}</h2>
//   </div>;
// });

// ["lkjsdf", "klsdjfklj", "ksdhfjk", "sdfh"];

// function doubleChar(str) {}
// doubleChar("String");

//! pop

// let arr = [];
// let obj = {
//   name: "Bilal",
//   suigonu: "Gulzina",
// };
// arr.push(obj);
// console.log(arr);

//! splice

// let arr = ["Bilal", "Nurzhigit", "Akbuura", "Gulzina"];
// arr.splice(0, 2, "Emirlan");
// arr.splice(2, 1);
// console.log(arr);

//! slice

// let arr = ["Nurzhigit", "Akbuura", "+", "Emirlan", "Bilal", "Gulzina"];
// console.log(arr.slice(1, 4));

//! split, join

// let arr = "Bilal".split("").reverse().join("");
// console.log(arr);

// let bilal = [1, "Elya", 4, 5, "Nurzhigit", 4];
// let res = bilal.filter((el) => {
//   console.log(typeof el);
//   if (typeof el !== "string") {
//     return el;
//   }
// });
// console.log(res);

// let bilal = ["Elya", 4, 5, "Nurzhigit", 4];
// let res = bilal.filter((el, ind) => {
//   if (ind === 0 || ind === 2 || ind === 3 || ind === 5) {
//     return el;
//   }
// });
// console.log(res);
