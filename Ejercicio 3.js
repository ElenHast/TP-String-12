/*Teniendo en cuenta el siguiente string: "La casa es de color blanco",
 hacer una funcion que modifique el color en el texto segun los siguientes 
 codigos: 1 = verde, 2= rojo, 3= amarillo. Que se reciben como parametro.*/

 function ejercicio3(texto,color) {
   let newStr ;
   if (color == 1){
     newStr = texto.replace('blanco', "verde")
   } else if (color == 2){
     newStr = texto.replace('blanco', "rojo")
   } else if (color == 3){
     newStr = texto.replace('blanco', "amarillo")
   }
   return newStr;
 }
 console.log(ejercicio3("La casa es de color blanco", 2));

 /* Si se pone solo texto.replace() sin declararlo bajo una variable, 
 como podria ser newStr no funciona. */
