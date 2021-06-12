"use strict";

main();

function factorial(n) {
  const cache = { 0: 1 };

  if (!cache[`${n}`]) {
    cache[`${n}`] = n * factorial(n - 1);
  } else {
    if (n <= 1) {
      cache[`${n}`] = 1;
    }
  }
  return cache[`${n}`];
}

function main() {

  console.time("factorial");
  console.log(factorial(200));
  console.timeEnd("factorial");


  console.time("factorial");
  console.log(factorial(200));
  console.timeEnd("factorial");

  console.time("factorial");
  console.log(factorial(200));
  console.timeEnd("factorial");

  console.time("factorial");
  console.log(factorial(200));
  console.timeEnd("factorial");
}
