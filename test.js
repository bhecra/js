function helloProperties(obj) {
  // Your code goes here

  let array = [];

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      array.push(`Hello-${key}`);
    }
  }

  return array;
}

const number = helloProperties({
  jhon: 12,
  brian: true,
  doe: "hi",
  fred: false,
});
// const number = closestToZero()
console.log(number);
