/*
Programación Oritentada a Objetos (POO)

Paradigma = Manera en la que se puede hacer algo especifico.
Paradigma de programación = Forma o manera en la que puedo programar algo.


Otras formas de programar:
Programación funcional
Programación imperativa
Programación declarativa


Pilares fundamentales de la programación POO
  -Polimorfismo
  -Herencia
  -Encapsulamiento
  -Abstraccion


  -Clases (Plantilla para hacer muchos objetos)
  -Objetos
    -Atributos (Lo que tengo)
    -Metedos (Lo qeu puedo hacer con lo que tengo)

*/


//Ejemplo del gatito

//Propiedades = variables o constantes
const color = "Gris";
var tamaño = "Chiquito";
var edad = 5;
var cicatrices = true;
const raza = "Angora";
var caracter = "Agresivo";


//Metodos o funciones
function comer(){}
function treparArboles(){}
function maullar(){}
function gruñir(){}
function dormir (){}
function corretearPerros(){}




//Precursor de los objetos Array

var gatito = ['Cilantro', 'Agresivo', 5, 'Angora', true, 'Chiquito'];
console.log(typeof(gatito));

//Evolucion de los arreglos
var Cilantro = {
    nombre: "Cilantro",
    edad: 5,
    caracter: "Agresivo",
    raza: "Angora",
}
console.log(typeof(Cilantro));
console.log(Cilantro.nombre);
console.log(Cilantro.caracter);


var Perejil = {
    nombre: "Perejil",
    edad: 10,
    caracter: "Feliz",
    raza: "Siames",
}

var Cebollita = {
    nombre: "Cebollita",
    edad: 1,
    caracter: "Timida",
    raza: "Esfinge",
}

var Limon = {
    nombre: "Limon",
    edad: 2,
    caracter: "Agrio",
    raza: "Egipcio",
}

console.log(typeof(Limon));
console.log("El nombre de Limon es", Limon.nombre);
console.log("El caracter de Limon es", Limon.caracter);


/*

Clases para agilizar este proceso (plantillas)

*/

//1.- Defino mi clase con la palabra reservada class
class gato {

    //2.- Definir mis propiedades o atributos como variables, para después ponerle valores
    nombre = "";
    edad = 0;
    raza = "";
    caracter = "";


      //3.- Agregar constructores
    //Necesito construir con los atributos que ya defini en la clase
    constructor(nombre,edad, raza, caracter){//funcion especial para construir donde necesito esos parametros
        this.nombre =nombre;
        this.edad = edad;
        this.raza = raza;
        this.caracter = caracter;


    }

    //4.- Definir los metodos que serán definidos como funciones o acciones

    maullar(){
        console.log("Miau");
    }
    dormir(){
        console.log("Zzzzz");
    }
    ronronear(){
        console.log("Prrrrr");
    }
    
}

//5.-Para empezar a crear o instanciar objetos (gatos), vamos a utilizar la palabra reservada new + nombre d emi clase

var Gardfield = new gato("Gardfield", 9, " Naranja", "Dormilon");
var Felix = new gato("Felix", 4, "Caricaturas", "Amistoso");
var Kitty = new gato ("Kitty", 1, "Kawaii", "Dulce");
var Dongato = new gato("Dongato", 5, "Pandillero", "Divertido");
var Benito = new gato("Benito", 1, "Egipcio", "Tranquilo");

console.log(Gardfield);
Gardfield.ronronear();
Gardfield.dormir();
console.log(Dongato);
Dongato.dormir();
Dongato.maullar();
console.log(Felix);
Felix.dormir();
Felix.maullar();
console.log(Benito);
Benito.dormir();
Benito.maullar();
console.log(Kitty);
Kitty.dormir();
Kitty.maullar();


//////////////////////////

/*

JSON (JavaScript Object Notation)

Es un formato estandar (que ya existe, alguien lo definio y tiene ciertas reglas) que esta basado en texto y nos sirve para representar datos estructurados basados en la sintaxis de JS


*/

//Objetos normales de JS
var Cebollita = {
    nombre: "Cebollito",
    edad: 1,
    caracter: "Timida",
    raza: "Esfinge",
}

console.log(Cebollita);
console.log(typeof(Cebollita));



//Objeto en JSON
/*
{  
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
  
 }  
 */

 var CebollitaJSON = {
    "nombre": "Cebollita",
    "edad": 1,
    "caracter": "Timida",
    "raza": "Esfinge",
    
 }

 console.log(CebollitaJSON);
 console.log(typeof(CebollitaJSON));


 const objetoDeserealizado = {"nombre": "Cebollita", "edad": 5};

 const objetoSerealizado = '{"nombre": "Cebollita", "edad": 5}';

 console.log(typeof(objetoDeserealizado));
 console.log(typeof(objetoSerealizado));

//Para poder hacer esas conversiones lo mas rapido posible uso dos metodos

//Objeto de JS

var Perejil = {
    nombre: "Perejil",
    edad: 10,
    caracter: "Feliz",
    raza: "Siames",
}

//JSON.stringify(objeto a string para que el servidor lo lea)

const PerejilSerializado = JSON.stringify(Perejil);


//JSON.parse(string a un  objeto JSON)

const PerejilDeserealizado = JSON.parse(PerejilSerializado);

console.log("Este es Perejil como objeto", PerejilDeserealizado);
console.log("Este es Perejil como cadena", PerejilSerializado);
