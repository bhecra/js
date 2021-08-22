function nextWeek(date) {
  // Your code goes here...

  const result = new Date(date);
  result.setDate(result.getDate() + 7)

  return result
}

const number = nextWeek(new Date())
// const number = closestToZero()
console.log(number)
