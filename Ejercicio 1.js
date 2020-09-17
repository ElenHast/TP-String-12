/* 1- Hacer una funcion que dado un string o cadena de caracteres, genere una nueva cadena con las mismas palabras pero no pueden haber espacios en blanco antes de la primera palabra y despues de la ultima. Y debe haber un solo espacio en blanco entre palabras. */

function ejercicio1(texto) {
  let newStr = texto.replaceAll('.','').trimStart().trimEnd();
  return newStr;
  }
console.log(ejercicio1("       Hola como andas amigo    .    . "));


//Usos de trim, trimStart trimEnd = Sacar espacios del strin, del principio, del final.
//Usos de replace, como dice la palabra reemplazar algo por otra cosa, si es mas complicado podria intentar usar regEx
