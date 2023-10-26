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


let dia = prompt("dame el dia de la semana").toLowerCase();
switch (dia) {
    case 'lunes':
        console.log("el dia que seleccionaste fue el dia lunes");  
        break;
    case 'martes':
        console.log("el dia que seleccionaste fue el dia martes");  
        break;
    case 'miercoles':
            console.log("el dia que seleccionaste fue el dia miercoles");  
        break;
    case 'jueves':
        console.log("el dia que seleccionaste fue el dia jueves");  
        break;
    case 'viernes':
        console.log("el dia que seleccionaste fue el dia viernes");  
        break;
    case 'sabado':
        console.log("el dia que seleccionaste fue el dia sabado");  
        break;
    case 'domingo':
        console.log("el dia que seleccionaste fue el dia domingo");  
        break;

    default: console.log("dia de la semana no valido");
        break;
}