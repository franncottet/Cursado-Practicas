/*
let nombre = "Bart";
let apellido = "Simpson";
let edad = 13;
let dirección = "742 Evergreen Terr.";
let pais = "EE.UU";
let carnet= "nombre: " +nombre+" "+
            "apellido: " +apellido+" "+
            "nombre: " +edad+" "+
            "nombre: " +dirección+" "+
            "nombre: " +pais;


console.log(carnet);
*/
/*
let NombrePadre = prompt("ingresa el nombre del padre de la familia");
let NombreMadre = prompt("ingresa el nombre de la madre de la familia");
let NombreHijo = prompt("ingresa el nombre del hijo de la familia");
let NombreHija = prompt("ingresa el nombre de la hija de la familia");
let NombreGatito = prompt("ingresa el nombre del gatito de la familia");

let family = NombrePadre +", "+NombreMadre+", "+NombreHijo+", "+NombreHija+" y "+ NombreGatito;
console.log("Su familia está compuesta por " + family);
*/

/*
let precio1= parseInt(prompt("Ingresa el precio del snack")) ;
let precio2= parseInt(prompt("Ingresa el precio de la bebida")) ;
let precio3= parseInt(prompt("Ingresa el precio del helado")) ;
let precio4= parseInt(prompt("Ingresa el precio de las golosinas")) ;

total= precio1+precio2+precio3+precio4;
descuento= total - (total * 0.3);

console.log("Total = " + total);
console.log("Total con Billetera Santa Fe (30% de descuento) = " + descuento);
*/
/*
let nameoriginal= "Juan";
let user = prompt("Ingresa tu nombre: ");
if (nameoriginal==user){
    console.log("Fui yo")
}else{
    console.log("No Fui yo")
}
*/

/*
let product1 = prompt("ingrese un producto");
let product2 = prompt("ingrese un producto");
let product3 = prompt("ingrese un producto");
let product4 = prompt("ingrese un producto");

if (product1&&product2&&product3&&product4 != "") {
    console.log("Los productos son: " + product1 + product2 + product3 + product4);
} else {
    console.log("Error, faltan cargar productos");
}
*/

/*
let number= prompt("Escriba un número")
let text= prompt("Escriba un texto")

for (let i= 0; i < number ; i++) {
    alert(text);
    
}
*/

/*
let number= prompt("ingrese un numero");

for (let i = 0; i < number ; i++) {
   
   if (i>3) {
       break
   }
   alert("lado") ;
}
*/

/*
let alumno="";
for (let index = 0; index < 10; index++) {
     alumno += prompt("ingrese un alumno")+", ";

}

console.log(alumno);

*/

/*
let user= prompt("ingrese un nombre de la saga de HARRY POTTER");
let ingresados="";

while (user != "Voldemort") {
    ingresados+=user+", "
    user=prompt("ingrese un nombre de la saga de HARRY POTTER");
    
}
console.log("Los nombres son:"+ ingresados);

*/

/*
let lista= ""
let product="";
let number=prompt("ingrese un número");
while (number!="ESC") {
    if (number==1) {
        product="Tomate"
    }else if (number==2) {
        product="Papa"
    } else if (number==3){
        product="Carne"
    }else if (number==4)
      product="Pollo"

   lista+=product+", " 
   number=prompt("ingrese un número")  
}

console.log(lista);

*/

//FUNCIONES

/*
let preciodolar=200
let preciopeso=1

function cotizardolar(pesos) {
    return pesos/210
}

function cotizarPesos(dolar) {
    return dolar*210
}

console.log(cotizardolar(prompt("ingrese el valor del peso para calcular dolar")));

console.log(cotizarPesos(500));

*/

// OBJETOS

/*
let persona={
    nombre:"Franco",
    edad:19,
    calle:"Belgrano2625"
}

// persona.nombre="lucia" (cambiar propiedad)

// persona.pelo="Azul" (agregar propiedad)

console.log(persona);
*/

//FUNCION CONSTRUCTORA CON THIS Y LLAMADO CON NEW

/*
function Tienda(nombre, direccion, propietario, rubro) {
    this.nombre=nombre;
    this.direccion=direccion;
    this.propietario=propietario;
    this.rubro=rubro;
    METODO: iría una función dentro de un this
}

 const tienda1 = new Tienda("Kwiw-E-Mart", "Av.Gral Paz 2082", "Apu", "Golosinas");
 const tienda2 = new Tienda("Say No More", "Aristobulo Del Valle 3320", "Roberto Firminho", "Farmacia");

console.log(tienda1);
console.log(tienda2);

*/

/*
class animal{
    constructor(especie,edad,color){
        this.especie=especie;
        this.edad=edad;
        this.color=color;
        this.info="Hola soy " + this.especie + " tengo " + this.edad + " años y soy de color " + this.color;
    }
    verInfo(){
        console.log(this.info+" ");
    }
}

let perro= new animal ("rottweiler", "5 años", "marrón")
let caballo= new animal ("Horse", "10", "negro")

perro.verInfo();
caballo.verInfo();

*/

//ARRAYS

/*
const equipo=["Homero", "Moe", "Burns", "Apu"];

for (let index = 0; index < 4; index++) {
    alert(equipo[index]+ " posición N°" + index);
    
}

*/

/*Declarar una clase Jugador que permita registrar nombre, número de camiseta, edad, y si está lesionado. Luego instanciar al menos cinco (5) objetos usando esta clase, y asociarlos a un array. */

/*
class Jugador {
  constructor  (nombre, numero, edad, lesionado) {
this.nombre=nombre;
this.numero=numero;
this.edad=edad;
this.lesionado=lesionado;
}
}

const jugadores=[];

jugadores.push (new Jugador ("Bart", 15, 12, true));
jugadores.push (new Jugador ("Nelson", 2, 13, false));
jugadores.push (new Jugador ("Milhouse", 14, 12, false));
jugadores.push (new Jugador ("Ted", 7, 10, false));
jugadores.push (new Jugador ("Pep", 20, 11, false));

console.log(jugadores);


function filtroJugadores(equipo, edad) {
    return equipo.filter(Jugador=>Jugador.edad ==parseInt(edad))
 }
  
function listaJugadores(params) {
    
} 

*/

