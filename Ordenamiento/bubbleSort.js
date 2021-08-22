function bubleSort(array) {
  for (var i = 0; i < array.length; i++) {
    console.log('ciclo 1 : ', array);
    let cambios = 0;
    for (var j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
        cambios = 1;
      }
    }
    if (cambios < 1) {
      break;
    }
  }
  console.log(array);
}

bubleSort([1, 5, 2, 3]);
