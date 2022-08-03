
 let nombre = prompt("ingrese nombre");
 

 while( nombre !== /* Recomiendo usar "!==" para mejores practicas! */ "esc") {
    alert("su nombre es " + nombre);
    nombre = prompt("ingrese nombre");
 }

alert("fin");  /* Si no vamos a pedir info recomiendo usar el metodo alert() en vez de prompt() */

/* Esta Aprobado! Cumple su funcion. Me hubiese gustado que hagas algo mas interactivo con algun juego y un poco mas de logica pero cumple con lo del desafio! */
