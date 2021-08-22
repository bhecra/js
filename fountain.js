function minCntFoun(a, N) {
  // dp[i]: Stores the position of
  // rightmost fountain that can
  // be covered by water of leftmost
  // fountain of the i-th fountain
  let dp = [];
  for (let i = 0; i < N; i++) {
    dp[i] = -1;
  }

  // Stores index of leftmost fountain
  // in the range of i-th fountain
  let idxLeft;

  // Stores index of rightmost fountain
  // in the range of i-th fountain
  let idxRight;

  // Traverse the array
  for (let i = 0; i < N; i++) {
    idxLeft = Math.max(i - a[i], 0);
    idxRight = Math.min(i + (a[i] + 1), N);
    dp[idxLeft] = Math.max(dp[idxLeft], idxRight);
  }

  // Stores count of fountains
  // needed to be activated
  let cntfount = 1;

  // Stores index of next fountain
  // that needed to be activated
  let idxNext = 0;
  idxRight = dp[0];

  // Traverse dp[] array
  for (let i = 0; i < N; i++) {
    idxNext = Math.max(idxNext, dp[i]);

    // If left most fountain
    // cover all its range
    if (i == idxRight) {
      cntfount++;
      idxRight = idxNext;
    }
  }
  return cntfount;
}

// Driver Code
let a = [2, 0, 0, 0];
let N = a.length;

console.log(minCntFoun(a, N));
