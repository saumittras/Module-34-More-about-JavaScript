console.log(1);
console.log(2);
// setTimeout(() => {
//   console.log(3);
// });
// setTimeout(() => {
//   console.log(3);
// }, 4000);
console.log(4);
console.log(5);
console.log(6);

// setInterval()

let num = 0;
const clockId = setInterval(() => {
  num++;
  if (num > 10) {
    clearInterval(clockId);
  }
  console.log(clockId, num);
}, 2000);
