function EYG() {
    
var nombre=document.getElementById(Cel).value;
var apellido=document.getElementById(Cela).value;
var direccion=document.getElementById(Cele).value;
var apodo=document.getElementById(Celi).value;

console.log("nombre");
console.log("apellido");
console.log("direccion");
console.log("apodo");



//convirtiendo en mayusculas
console.log(nombre.toUpperCase());
console.log(apellido.toUpperCase());
//convirtiendo en minuscula
console.log(direccion.toLowerCase());
console.log(apodo.toLowerCase());

var mensaje=`$(nombre) + $ (apellido)  $ (direccion)$(apodo)`



}