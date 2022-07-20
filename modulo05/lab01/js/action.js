/* var numeroActual = 0;
do{
    var numeroActual = Number(prompt("Ingrese un numero actual"));
    var suma = suma + numeroActual;
}while ((continaur = confirm("¿Desea seguir ingresando numeros?")));
alert("Total ingresado: "+suma); */



let numeroActual = 0;
let suma = 0;
do{
    numeroActual = Number(prompt("Ingrese un numero actual"));
    suma += numeroActual;
}while ((continaur = confirm("¿Desea seguir ingresando numeros?")));
alert(`Total ingresado: ${suma}`);
