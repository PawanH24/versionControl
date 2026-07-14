////QNO1.>>>>
// const employees = [
//   { name: "A", salary: 5000 },
//   { name: "B", salary: 80000 },
//   { name: "B", salary: 8000 },
// ];
// let highest = employees[0].salary;
// for (let i of employees) {
//   if (highest < i.salary) highest = i.salary;
// }
// console.log(highest);

// const employees = [
//   { name: "A", salary: 5000 },
//   { name: "B", salary: 80000 },
//   { name: "B", salary: 8000 },
// ];
// const highest = Math.max(...employees.map((emp) => emp.salary));
// console.log(highest);

////QNO.2>>>>
// const employees = [
//   { name: "A", salary: 5000 },
//   { name: "B", salary: 80000 },
//   { name: "B", salary: 8000 },
// ];
// const avg =
//   employees.length === 0
//     ? 0
//     : employees.reduce((acc, v) => acc + v, 0) / employees.length;

// console.log(avg);

////QNO.3>>>>
const data = [
  { name: "A", age: 16 },
  { name: "B", age: 22 },
];
console.log(data.filter((e) => e.age >= 18));
