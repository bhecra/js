'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'checkDivisibility' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY arr as parameter.
 */

const PERMUTATION_DIVISOR = 8;
function factorial(n) {
  let factorial = 1;

  while (n > 1) {
    factorial *= n;
    n--;
  }

  return factorial;
}

function checkDivisibility(arr) {
  // Write your code here

  let result = [];

  arr.forEach((value) => {
    result.push(getPermutations(value));
  });

  return result;
}

function reverseString(str) {
  return [...str].reverse().join('');
}

function checkPermutationDivisibility(value) {
  return Number(value) % PERMUTATION_DIVISOR === 0;
}

function getPermutations(value) {
  let number = value.toString();
  const size = number.length;
  let permutations = [];
  const perm_number = factorial(size);

  const reps = Math.floor(perm_number / 2 - 1);

  if (
    checkPermutationDivisibility(number) ||
    checkPermutationDivisibility(reverseString(number))
  ) {
    return 'YES';
  }

  let current_position = size - 1;

  for (let i = 0; i < reps; i++) {
    if (current_position === 0) {
      current_position = size - 1;
    }

    let list_number = [...number];

    [list_number[current_position], list_number[current_position - 1]] = [
      list_number[current_position - 1],
      list_number[current_position],
    ];

    number = list_number.join('');

    if (
      checkPermutationDivisibility(number) ||
      checkPermutationDivisibility(reverseString(number))
    ) {
      return 'YES';
    }
    current_position--;
  }

  return 'NO';
}
