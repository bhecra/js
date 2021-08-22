'use strict';

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

function reverseString(str) {
  return [...str].reverse().join('');
}

function addPermutation(list, value) {
  if (!list.includes(value)) {
    list.push(value);
  }
}

function gerPermutations(value) {
  let number = value.toString();
  const size = number.length;
  let permutations = [];
  const perm_number = factorial(size);

  addPermutation(permutations, number);
  addPermutation(permutations, reverseString(number));

  let current_position = size - 1;
  const reps = Math.floor(perm_number / 2 - 1);

  for (let i = 0; i <= reps; i++) {
    if (current_position == 0) {
      current_position = size - 1;

      let list_number = [...number];

      [list_number[current_position], list_number[current_position - 1]] = [
        list_number[current_position - 1],
        list_number[current_position],
      ];

      number = list_number.join('');

      addPermutation(permutations, number);
      addPermutation(permutations, reverseString(number));
    }

    current_position -= 1;
  }
  return permutations;
}

function main() {
  console.time('factorial');
  console.log(gerPermutations(121));
  console.timeEnd('factorial');
}
