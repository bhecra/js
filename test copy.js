function closestToZero(numbers) {

  // Your code goes here

  let closestToZero = Math.min(numbers) ;

  if (!numbers || numbers.length === 0) {
    return 0;
  }

  numbers.forEach(element => {

    closestToZero = Math.abs(element) > closestToZero ? closestToZero : Math.abs(element)

  });

  return closestToZero
}

const number = closestToZero([11,52,3,4,55,7,8,9,10,25])
// const number = closestToZero()
console.log(number)
