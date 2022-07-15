//Declaración

/*
let añoactual;
let mes;
let día;

//Asignación

añoactual = 2022;
mes = "agosto";
día = 14;
const nacimiento = 2002

*/

//Inicializar

//let edad = añoactual-nacimiento;

//console.log(edad);

//let ingresodedatos = prompt("ingrese su edad");
//let mensaje = "Tienes "
//let mensaje2= " años"
//console.log(mensaje + ingresodedatos + mensaje2);

//parsear o convertir
/*let n1= parseInt(prompt("ingresa un numero"));
let n2= parseInt(prompt("ingresa el segundo número"));
let resultado = n1 + n2;
let msj = "el resultado de la suma es de ";
console.log (msj + resultado)*/

//PROMPT = PEDIR AL USUARIO QUE INGRESE UN DATO

//Condicionales

// = sirve para asignar  /  == sirve para comparar (equivalencias) / === compara  valores y ademas el tipo de dato (comparación estricta)

/*
let number = 14

if (number == 12) {
    console.log ("los números son iguales");
}else{
    console.log("los números no son iguales")
}

*/

/*let esIgual = (number == 12);
console.log(esIgual);*/

/* 
let nombre = prompt ("ingresa tu nombre");
if (nombre ==""){
    alert ("Usuario no identificado"); 
}else{
    alert ("hola, te has identificado como " + nombre)
} 
*/ 


// VARIABLE AND &&  / VARIABLE O || 

/*
let user = prompt ("Ingresa tu usuario") ;
let password = prompt ("Ingresa tu contraseña");

if (user !="" && password != "") {
 if (user == "JUAN" || "juan") {
     alert ("Hola Juan todo bien?")
} else {  
    alert ("Hola " + user);
}
}
*/

//i++  es lo mismo que decir  i=i+1  //

/* 
for (let i= 0; i <= 10; i++) {
    console.log(i);
}
*/

// For - While - Do while - Switch/Case //

//FUNCIONES

/*
function saludo() {  //DECLARACIÓN
    let ingresarNombre=prompt("Ingresa tu nombre");
    alert("Hola "+ingresarNombre);
}

saludo(); // LLAMADO

*/

//OBJETOS

/*

function persona(nombre, edad, tel,dni) {
    this.nombre= nombre
    this.edad= edad
    this.tel= tel
    this.dni= dni

    //metodo

    this.saludar=function(){
        alert("Hola me llamo " + this.nombre);
    }
}

const persona2=new persona ("Ruben", 54, "342411180", "20229180")
const persona3= new persona("Silvina", 54, "342401180", "20255672")

console.log(persona2);
console.log(persona3);

*/

/*
// ARRAYS 

const numeros=[1,2,3,4,5];
const nombres=["Juan", "Luis", "Emiliano", "Johana"];
console.log("Tamaño del array numeros = "+numeros.length);

for (let index = 0; index < 5; index++) {
    console.log(numeros[index]);
    
}

//Agregar elementos al Array con push

numeros.push(7,8,9);
console.log(numeros);

//Quitar elementos con pop (quita elementos del final)
numeros.pop()
console.log(numeros);

//Quitar elementos con SHIFT (quita elementos del principio)
numeros.shift()
console.log(numeros);
//Quitar elementos con SPLICE (quita elementos desde una posición hacia otra)
numeros.splice(2,2)
console.log(numeros);

//JOIN se utiliza para generar un string con todos los elementos del array separados por el elemento que queramos
console.log(nombres.join(", "));

//CONCAT se utiliza para combinar dos Arrays en uno solo
const todos=numeros.concat(nombres)
console.log(todos);

//SLICE se utiliza para copiar una parte del Array, creando un nuevo Array
const directores=nombres.slice(0, 2)
console.log(directores)

//INDEXOF se utiliza para obtener el indice al que corresponde determinado elemento del array
console.log(nombres.indexOf("Emiliano"))

//INCLUDES se utiliza para ver si un elemento existe o no dentro de un array
console.log(nombres.includes("Juan"))
console.log(nombres.includes("Franco"))

//REVERSE se utiliza para invertir el orden de los elementos del array - Lo cambia para siempre
nombresrever= nombres.reverse()
console.log(nombresrever)
console.log(nombres)

*/

