function abbreviation(a, b) {
  // Write your code here
  let newWord = '';
  for (const [index, letter] of [...a].entries()) {
    if (letter === letter.toLowerCase()) {
      if (b.includes(letter.toUpperCase())) {
        const indexb = b.indexOf(letter.toUpperCase());
        const indexa = newWord.indexOf(letter.toUpperCase());
        if (indexa == -1) {
          newWord += letter.toUpperCase();
        } else if (indexb == newWord.length) {
          newWord += letter.toUpperCase();
        }
      }
    } else {
      newWord += letter;
    }
  }
  console.log(a + ' = ' + b + ' = ' + newWord);
  return newWord === b ? 'YES' : 'NO';
}

// console.log(abbreviation('AbCdE ', 'AFE'));
// console.log(abbreviation('beFgH ', 'EFG'));
// console.log(abbreviation('beFgH ', 'EFH'));
// console.log(
//   abbreviation('LLZOSYAMQRMBTZXTQMQcKGLR', 'LLZOSYAMBTZXMQKLR'),
//   'NO'
// );
// console.log(abbreviation('MGYXKOVSMAHKOLAZZKWXKS', 'MGXKOVSAHKOLZKKDP'), 'NO');
console.log(abbreviation('VLKHNlpsrlrvfxftslslrrh', 'VLKHNL'), 'YES');
// console.log(
//   abbreviation('OQSVONTNZMDJAVRZAZCVPKh', 'OSVONTNZMDJAVRZAZCVPK'),
//   'NO'
// );
// console.log(abbreviation('AXbosoh', 'AX'), 'YES');
// console.log(abbreviation('EYONDOCHNZYYlBZXPGzX', 'EYONDOCHNZYYBZXPGXOG'), 'NO');
// console.log(abbreviation('BJAFXKGENMFUvdsvcptrp', 'BJAFXKGENMFU'), 'YES');
// console.log(abbreviation('UBUFOOSIXXsdtfmeyongkhehq', 'UBUFOOSIXX'), 'YES');
// console.log(
//   abbreviation('PWBIJLCOIAXGJGUXUZOutgic', 'PWBIJLCOIAXGJGUXUZO'),
//   'YES'
// );
// console.log(abbreviation('EOWZEOHWYOJTBNMcefdsp', 'EOWZEOHWYOJTBNM'), 'YES');
