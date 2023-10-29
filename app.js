// Condicionales If, If Else y Switch

// let numero1 = 30;
// let numero2 = 20;


// if (numero1 > numero2) {
//     console.log("El numero: " + numero1+ " es mayor que el numero: " + numero2);    
// }else {
//     console.log("El numero: " + numero2+ " es mayor que el numero: " + numero1);    
// }

// Pedir la edad del usuario, decirle si es mayor de edad, siempre y cuando te de un valor mayor a 0.
// informacion anidada

// let edad = prompt("escribe tu edad");

// if (edad > 0) {
//     if (edad >= 18){
//         document.write("eres mayor de edad");
//     }else{
//         document.write("eres menor de edad");
//     }    
// } else {
//     documento.write("edad no valida");
// }


// let dia = prompt("dame el dia de la semana").toLowerCase();
// switch (dia) {
//     case '1':
//         console.log("el dia que seleccionaste fue el dia lunes");  
//         break;
//     case 'martes':
//         console.log("el dia que seleccionaste fue el dia martes");  
//         break;
//     case 'miercoles':
//             console.log("el dia que seleccionaste fue el dia miercoles");  
//         break;
//     case 'jueves':
//         console.log("el dia que seleccionaste fue el dia jueves");  
//         break;
//     case 'viernes':
//         console.log("el dia que seleccionaste fue el dia viernes");  
//         break;
//     case 'sabado':
//         console.log("el dia que seleccionaste fue el dia sabado");  
//         break;
//     case 'domingo':
//         console.log("el dia que seleccionaste fue el dia domingo");  
//         break;

//     default: console.log("dia de la semana no valido");
//         break;
// }

// OPERADOR TERNARIO

// let numero1 = 15;
// let numero2 = 20;
//                     // condicion ? true : false;
// let valor = (numero1 > numero2) ? "el numero1 es mayor" : "el numero2 es mayor";

// console.log(valor);


// Ejercicio 1
// let numero1 = prompt("escribe un numero");
// let numero2 = prompt("escribe otro numero");

// if (numero1 === numero2) {
//     console.log("Los numeros son iguales, ");
//     document.write("Los numeros son iguales, ");
// } else {
//     console.log("los numeros son diferentes, ");
//     document.write("Los numeros son diferentes, ");
// }
// if (numero1 > numero2) {
//     console.log(numero1 + " es mayor " );
//     document.write(numero1 + " es mayor " );
// } else {
//     console.log(numero2 + " es mayor " );
//     document.write(numero2 + " es mayor " );
// } 


// Ejercicio 2
// let numero = prompt("dame un numero");
// if (numero % 2 === 0) {
//     console.log("el numero es par");
//     document.write("el numero es par");
// } else {
//     console.log("el numero es impar");
//     document.write("el numero es impar");
// }

// Ejercicio 3
// let numero1 = prompt("dame un numero entero")
// let numero2 =  prompt("dame otro numero entero")
// if (numero1 == 0 && numero2 == 0) {
//         document.write("error")
//         console.log("error")
// }else if (numero1 > 0 && numero2 > 0) {
//         document.write("El cociente es " + numero1/numero2);
//         console.log("El cociente es " + numero1/numero2);
// }

// Ejercicio 4
let numero1 = prompt("dame un numero");
let numero2 = prompt("dame otro numero");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);


let operaciones = prompt("¿Qué operación quieres hacer?", "suma, resta, multiplicacion, division");
switch (operaciones) {
    case 'suma':
        console.log(numero1 + numero2);
        break;
    case 'resta':
        console.log(numero1 - numero2);
        break;
    case 'multiplicacion':
        console.log(numero1 * numero2);
        break;
    case 'division':
        if (numero1 == 0 && numero2 == 0) {
            console.log("no se puede hacer la división");
        }else{
            console.log(numero1 / numero2);
        }
        break;
    default:
        break;
}