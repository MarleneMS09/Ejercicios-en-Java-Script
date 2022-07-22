//DATOS CON JSON
//It was created from Douglas Crockford, (Java Script Object Notation)
"use strict"
var persona= {nombre: 'Marlene', twitter: 'MarS' }; 
var personas= [
  {nombre: 'Denisse', twitter: 'Denisse'}, 
  {nombre: 'Berenice', twitter: 'BerenS'}, 
  {nombre: 'Maria', twitter: 'Mary'},
  persona 
]
//if I select some person in the console I can see all the names

var personaJSON= JSON.stringify(persona); 
//convert all text as text strings
var nuevaPersona= JSON.parse (personaJSON)
//the method understands the entire text string and recomposes it as an object
