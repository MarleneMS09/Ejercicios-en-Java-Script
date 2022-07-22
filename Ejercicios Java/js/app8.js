//USO DE SÍMBOLOS EN JAVASCRIPT
//Los símbolos son un tipo de datos cuyos valores son únicos e inmutables, es decir no van a cambiar
//a lo largo del programa puesto que estos valores al momento de ser únicos se mantienen así.
//podemos asignarlo a un nombre o una variable
"use strict"
var simbolo1= Symbol(); //si escribes New symbol gener aun error
var simbolo2=Symbol();
// si en la consola pongo simbolo1===simbolo2 (para preguntar si son iguales) da false
var ambiente=Symbol('dev');
//cada que genero un simbolo se genera un dato en el programa

