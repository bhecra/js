'use strict';

var cacheFactorial = { 0: 1 };
var cachePermitation = {};
main();

function factorial(n) {
  if (!cacheFactorial[`${n}`]) {
    cacheFactorial[`${n}`] = n * factorial(n - 1);
  } else {
    if (n <= 1) {
      cacheFactorial[`${n}`] = 1;
    }
  }
  return cacheFactorial[`${n}`];
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
  let number = '0';
  let numberBase = '0';
  if (typeof value === 'number') {
    number = value.toString();
    numberBase = value.toString();
  } else if (typeof value === 'object') {
    number = value.join('');
    numberBase = value.join('');
  } else {
    number = value;
    numberBase = value;
  }

  if (!cachePermitation[`${numberBase}`]) {
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
      }

      let list_number = [...number];

      [list_number[current_position], list_number[current_position - 1]] = [
        list_number[current_position - 1],
        list_number[current_position],
      ];

      number = list_number.join('');

      addPermutation(permutations, number);
      addPermutation(permutations, reverseString(number));

      current_position -= 1;
    }

    cachePermitation[`${numberBase}`] = permutations;

    return permutations;
  } else {
    return cachePermitation[`${numberBase}`];
  }
}

function main() {
  console.time('factorial');
  console.log(gerPermutations(12345678910));
  console.timeEnd('factorial');
  console.time('factorial');
  console.log(gerPermutations(12345678910));
  console.timeEnd('factorial');
  console.time('factorial');
  console.log(gerPermutations(12345678910));
  console.timeEnd('factorial');
  console.time('factorial');
  console.log(gerPermutations(12345678910));
  console.timeEnd('factorial');
}
