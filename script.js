function durationForHumans(TotalSegundos) {
  const segundos = TotalSegundos % 60;
  const minutos = Math.floor((TotalSegundos / 60) % 60);
  const horas = Math.floor((TotalSegundos / 60 / 60) % 24);
  const dias = Math.floor((TotalSegundos / 60 / 60 / 24) % 365);
  const años = Math.floor(TotalSegundos / 60 / 60 / 24 / 365);

  let resultado = [];
  const calculos = [años, dias, horas, minutos, segundos];
  const etiquetas = ["año", "dia", "hora", "minuto", "segundo"];
  for (i = 0; i < 5; i++) {
    resultado.push(
      calculos[i] + " " + etiquetas[i] + (calculos[i] > 1 ? "s" : "")
    );
  }
  //   Este metodo se utiliza para transformar a String el Array y que la ultima coma se transofrme en un "y"
  const formatter = new Intl.ListFormat("es", {
    style: "long",
    type: "conjunction",
  });

  return formatter.format(resultado);
}

// Ejercicio 21
// Crear una función llamada durationForHumans (Duración Para Humanos) que
// reciba como parámetro un número entero (representando una cantidad de
// segundos) y retorne un string con un texto que indique la cantidad de tiempo que
// transcurrió, pero con un formato fácil de leer por humanos.
// Para este ejercicio, un año está compuesto por 365 días.
// Ejemplos:
// Input Output
// durationForHumans(0) "ahora"
// durationForHumans(62) "1 minuto y 2 segundos"
// durationForHumans(3662) "1 hora, 1 minuto y 2 segundos"
// durationForHumans(43424234) "1 año, 137 días, 14 horas, 17 minutos y 14 segundos"
// durationForHumans(4342440) "50 días, 6 horas y 14 minutos"

// Notar que no son correctos formatos como:
// ● "14 horas y 2 años" (orden incorrecto, debería ser "2 años y 14 horas").
// ● "40 horas, 20 horas y 3 minutos" (la componente de horas debería aparecer una
// sola vez, por ejemplo: "2 días, 12 horas y 3 minutos").
// ● "14 horas, 2 minutos" (debería ser "14 horas y 2 minutos").
// ● "68 minutos" (debería ser "1 hora y 8 minutos").
