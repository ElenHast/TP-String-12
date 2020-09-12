# TP-String-12
Trabajo practico numero 12 de string - javascript 12-09-20

Consignas:

1- Hacer una funcion que dado un string o cadena de caracteres, genere una nueva cadena con las mismas palabras pero no pueden haber espacios en blanco antes de la primera palabra y despies de la ultima. Y debe haber un solo espacio en blanco entre palabras.

2- Hacer una funcion que dado un string y un caracter, devuelva una cadena de caracteres con todas las palabras que comienzan y terminan con ese caracter.

3- Teniendo en cuenta el siguiente string: "La casa es de color blanco", hacer una funcion que modifique el color en el texto segun los siguientes codigos: 1 = verde, 2= rojo, 3= amarillo. Que se reciben como parametro.

4- Hacer una funcion que, dado un string, verifique si en la misma existe una palabra que ingresa el usuario. La funcion debe devolver un fragmento de la cadena que incluya desde la palabra en cuestion hasta el final de la cadena (en casa de que la palabra no exista debera devolver -1)

5- Hacer una funcion que reciba una cadena de caracteres y analice: si encuentra palabras que inicien con "a", finalicen con "o" y cuya longitud sea mayor a 5. En caso afirmativo, la funcion debera devolver una nueva cadena con esas palabras convertidas en mayusculas.

6- Hacer una funcion que reciba un string y una palabra y luego analice: si encuentra esap alabra en el string, devolver una nueva cadena que diga "Encontre la palabra en la posicion xx", reemplazando el "xx" con la posicion que la que se encontro.

7- Hacer una funcion que reciba como parametro una cadena de texto, la funcion debera retornar verdadero (true) en caso de que la cadena ingresada sea un palindromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palindromo complejo: "La ruta nos aporto otro paso natural". En caso contrario, debera devolver falso. No se toman en cuenta las tildes para el analisis.

8- Hacer una funcion que reciba como parametro una frase y una palabra, la funcion debera devolver verdadero en caso de encontrar la palabra indicada, dentro de la frase proporcionada, de lo contrario, devolvera falso. Suponer que este comportamiento es el que se espera para un analizador de correo spam.

9- Hacer una funcion que permita completar una frase de dichos populares como por ejemplo "Quien madruga, Dios lo ayuda". La funcion debera recibir dos parametros, el primero es una parte de la frase, en el ejemplo es "Quien madruga, ", el segundo parametro es un valor que ingresa el usuario para completar la frase, en el caso concretro del ejemplo, seria "Dios lo ayuda". La funcion debera retornar verdadero si la concatenacion de ambos parametros es igual a la frase escogida.

10- Hacer una funcion que reciba una frase y este deba calcular un codigo de clave "identificacion unico", como si se tratara de un hash. Para realizar la aplicacion, el "codigo unico" se generara a partir de la concatenacion de los caracteres impares de la frase, con el valor Unicode del caracter en el indice par siguiente. Por ejemplo: Para la frase "Hola mundo" debera devolver “H111l97 77u110d111”, ya que:

![Tabla](https://i.imgur.com/7I9jrTH.png)
