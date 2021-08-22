function maxSubsetSum(arr) {
  if (!arr) return 0;

  let arrays = [];
  let max = 0;

  const size = arr.length;

  if (size === 1) {
    return arr[0];
  }
  if (size === 2) {
    return Math.max(arr[0], arr[1]);
  }

  max = Math.max(arr[0], arr[1]);
  console.log(`[${arr[0]}, ${arr[1]}]`);

  arrays[0] = arr[0];
  arrays[1] = max;

  for (let i = 2; i < arr.length; i++) {
    console.log(`[${arrays[i - 2] + arr[i]}, ${max}]`);
    max = Math.max(arrays[i - 2] + arr[i], max);
    max = Math.max(arr[i], max);
    arrays[i] = max;
  }

  return arrays[size - 1];
}

// const arr = [3, 7, 4, 6, 5];
const arr = [2, 1, 5, 8, 4];

console.log(maxSubsetSum(arr));

/**
 * Para este problema, queremos almacenar la suma máxima posible para cada posición en la matriz.

(Dado que necesitamos omitir elementos adyacentes, no podemos simplemente iterar directamente a través de la matriz)

Necesitamos averiguar los valores máximos para las primeras 2 posiciones manualmente.

La posición máxima para el primer valor solo puede ser el primer valor (ya que el problema especifica que debe ser un subconjunto de la matriz)

La posición máxima para el segundo valor solo puede ser el valor actual o el valor anterior.

A partir de ahí, necesitamos iterar sobre los valores restantes y calcular su máxima suma posible (Sugerencia: no inicie el ciclo en el índice 0)

El valor máximo posible para la posición actual solo puede ser de 3 cosas.

El elemento actual más el valor máximo de hace 2 posiciones (esto maneja el adyacente)

El último valor máximo, por ejemplo (imagina que el primer valor de la matriz fue negativo, el segundo valor fue positivo y el valor actual es 0)

El elemento actual, por ejemplo (el valor máximo de hace 2 posiciones podría haber sido negativo)
 */
