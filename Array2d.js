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
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
  // Write your code here

  let bigArr = [];
  let sumArr = [];

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr.length - 2; j++) {
      let newArr = Array(9);

      let cont = 0;
      const from = Math.sqrt(newArr.length);

      for (let n = 0; n < from; n++) {
        for (let m = 0; m < from; m++) {
          if (!(cont === 3 || cont === 5)) {
            newArr[cont] = arr[i + n][j + m];
          }
          cont++;
        }
      }

      let sum = newArr.reduce((acum, cur) => acum + cur);

      bigArr.push(newArr);
      sumArr.push(sum);
    }
  }

  return Math.max(...sumArr);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, '')
      .split(' ')
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const result = hourglassSum(arr);

  ws.write(result + '\n');

  ws.end();
}
