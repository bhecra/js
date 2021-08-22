const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var obj = {
  a: '1',
};

var image = ['000', '111', '222'];
var pattern = ['11', '22'];

// masculinos contiene ['Pedro','Miguel']
solve(3, 3, image, 2, 2, pattern);

function solve(
  imageWidth,
  imageHeight,
  image,
  patternWidth,
  patternHeight,
  pattern
) {
  // Write your code here
  // To debug: console.error('Debug messages...');

  let xPos = -1;
  let yPos = -1;

  // console.log(image)
  // console.log(pattern)

  let xPattern = 0;
  let yPattern = 0;

  for (let i = 0; i <= imageWidth - patternWidth; i++) {
    for (let j = 0; j <= imageHeight - patternHeight; j++) {
      console.log(nombres.slice(1, 3)[0].slice(0, 2));

      if (image[i][j] == pattern[xPattern][yPattern]) {
        xPos = i;
        yPos = j;
        const tempImage = image.slice(j, j + patternHeight);

        console.log(tempImage);

        for (let z = 0; z < tempImage.length; z++) {
          console.log(tempImage[z].slice(i, i + patternWidth));
        }
      }
      yPattern++;
    }
    xPattern++;
  }

  return [xPos, yPos];
}
