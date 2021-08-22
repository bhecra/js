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
 * Complete the 'fountainActivation' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY locations as parameter.
 */

function fountainActivation(locations) {
  // Write your code here

  const n = locations.length;
  if (n < 1 || n > 10e5) return;

  let maxAndMin = Array.from({ length: n }, (_, index) => -1);

  let from;
  let to;

  locations.forEach((location, i) => {
    from = Math.max(i + 1 - location, 1);
    to = Math.min(i + 1 + location, n);

    maxAndMin[from - 1] = Math.max(maxAndMin[from], to);
  });

  let countFound = 1;
  let next = 0;
  to = maxAndMin[0];

  maxAndMin.forEach((item, i) => {
    next = Math.max(next, item);
    if (i === to) {
      countFound++;
      to = next;
    }
  });
  return countFound;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const locationsCount = parseInt(readLine().trim(), 10);

  let locations = [];

  for (let i = 0; i < locationsCount; i++) {
    const locationsItem = parseInt(readLine().trim(), 10);
    locations.push(locationsItem);
  }

  const result = fountainActivation(locations);

  ws.write(result + '\n');

  ws.end();
}
