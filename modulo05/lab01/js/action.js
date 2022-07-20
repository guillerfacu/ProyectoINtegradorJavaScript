var numeroActual = 0;
do{
    var numeroActual = Number(prompt("Ingrese un numero actual"));
    var suma = suma + numeroActual;
}while ((continaur = confirm("¿Desea seguir ingresando numeros?")));
alert("Total ingresado: "+suma);
