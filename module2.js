////QNO.1>>>>
// const marks = [99, 99, 0];
// const total = marks.reduce((acc, cv) => acc + cv, 0);
// const avg = total / marks.length - 1;

// if (marks.every((mark) => mark >= 40) && avg >= 50) {
//   console.log("Congratulations you passed !");
// } else {
//   console.log("Failed");
// }

////QNO.2>>>>
// const input = [99, 56, 33, 100, 47, 10];

// let highest = input[0];
// for (let i of input) {
//   if (i > highest) highest = i;
// }
// console.log(highest);

////QNO.3>>>>
// const a = 1;
// const b = 2;
// const c = 5;
// if (a + b > c && a + c > b && b + c > a) {
//   console.log(true);
// } else console.log(false);

////QNO.4>>>>
// const a = 4;
// const b = 3;
// const c = 4;
// if (a + b > c && a + c > b && b + c > a) {
//   if (a === b && b === c) {
//     console.log("Equilateral");
//   } else if (a === b || b === c || c === a) {
//     console.log("Isoscles");
//   } else {
//     console.log("Scalene");
//   }
// } else {
//   console.log("Trianlge cannot be made");
// }

////QNO.5>>>>
// const year = 2021;
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log("Leap year");
// } else {
//   console.log("NOT");
// }

////QNO.6>>>>
// const input = "}";
// const code = input.charCodeAt(0);
// if (code >= 48 && code < 58) {
//   console.log("Digit");
// } else if (code >= 65 && code < 91) {
//   console.log("Uppercase");
// } else if ((code >= 91 && code < 97) || (code >= 123 && code < 128)) {
//   console.log("Special Symbols");
// } else if (code >= 97 && code < 123) {
//   console.log("Lowercase");
// }

////QNO.7>>>>
// const age = 20;
// const status = "active";
// if (age >= 18 && (status === "active" || status === "admin")) {
//   console.log("true");
// } else {
//   console.log("false");
// }

////QNO.8>>>>
// function verifyPassword(password) {
//   if (password.length < 8) {
//     return false;
//   }
//   let hasUpper = false;
//   let hasLower = false;
//   let hasDigit = false;

//   for (let i = 0; i < password.length; i++) {
//     const char = password[i];
//     if (char >= "0" && char <= "9") {
//       hasDigit = true;
//     } else if (char >= "A" && char <= "Z") {
//       hasUpper = true;
//     } else if (char >= "a" && char <= "z") {
//       hasLower = true;
//     }
//     if (hasUpper && hasDigit && hasLower) break;
//   }
//   return hasUpper && hasLower && hasDigit;
// }
// const pass = "SecurePass123";
// console.log(verifyPassword(pass));
// console.log(verifyPassword("short1A"));
// console.log(verifyPassword("SECUREPASS123"));
// console.log(verifyPassword("securepass123"));
// console.log(verifyPassword("SecurePass"));

////QNO.9>>>>

// const input = 15;
// if (input % 30 === 0) console.log("true");
// else console.log("false");

////QNO.10>>>>
// const p1 = { score: 10, fouls: 1 };
// const p2 = { score: 10, fouls: 1 };
// if (p1.score > p2.score) {
//   console.log("p1 wins");
// } else if (p2.score > p1.score) {
//   console.log("p2 wins");
// } else if (p1.fouls < p2.fouls) {
//   console.log("p1 wins via tie breaker");
// } else if (p1.fouls > p2.fouls) {
//   console.log("p2 wins via tie breaker");
// } else console.log("DRAW");

//! event loop

//? 1. callstack
//? 2. web apis : timers-> setTimeout , setInterval , fetch , promise:{status:pending, onResolved:(){},onReject:(){},finally:(){}} , dom events , geo location
//? 3. task queue  -> FIFO
// callback queue / macro task queue -> 3
// microtask queue -> 0
//? 4. event loop

//empty  micro task queue
// 1 callback queue
//empty  micro task queue
// 1 callback queue

const getData = async () => {
  try {
    console.log("async start");
    const user = await fetchUser();
    console.log(user);
    const posts = await fetchPosts(user._id);
    console.log(posts);
  } catch (error) {
    console.log("catch");
    console.log(error);
  }
};

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log("success");
    return response.json();
  })
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.log(error);
  });

//* setTimeout
// setTimeout(callback , timer , arg1,arg2....argn)

setTimeout(() => {
  console.log("processing");
}, 2000);

fetchUser()
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// getAllUser();

//* Promise.all() =>  -> 5 ->
//* Promise.allSettled() -> 5 ->
//* Promise.race() -> 5 ->
//* Promise.any() -> 5 ->

//! js  es6
//* let const
//* template literal ``
//* class
//* enhanced object literal  => {}
// let key = "name";
// let user = {
//   [key]: "john",
//   // getName: function () {
//   //   return this.name;
//   // },
//   getName() {
//     return this.name;
//   },
// };

//* spread op
//* rest op  ...
//* destructuring
//
let user = {
  name: "john",
  email: "john@gmail.com",
  password: "1234567654",
};
// const name = user.name;
// const email = user.email;
// const { name, email, password } = user;
// let { name: user_name, ...x } = user;
// console.log(user_name);

//* arrow function
//* default parameter
//* rest parameter ...
const add = (...numbers) => {
  console.log(numbers);
  return numbers.reduce((acc, num) => acc + num, 0);
  // return a + b;
};

console.log(add(12, 3));
console.log(add(12, 3, 45));
console.log(add(12, 3, 45, 5, 6, 79));

//* map , filter , reduce

//! ES module  -> import/export

//* map , set
