let rol = prompt('Cual es tu rol?');
if (rol == 'admin' || rol == 'recursos') {
    let clave = prompt('Cual es tu clave?');

    while (clave != '1234') {
        clave = prompt('No es , Cual es tu clave?');
    }

    let nombre = prompt('Cual es su nombre de usuario');

    let nombreUsuario = document.getElementById('rename');
    let username = nombre;
    nombreUsuario.innerHTML = username;


    

    let empleado= [];
    empleado.push = prompt('Ingrese el nombre:');
    empleado.push = prompt('Ingrese el apellido:');
    empleado.push = prompt('Ingrese la edad:');




    let nombreNuevo = prompt('Ingrese nombre');
    let claveNueva = prompt('Ingrese Clave');

    if (nombreNuevo == nombre && claveNueva == '1234') {
        alert('Binvenido  ' + nombreNuevo);
        for(let i = 0; i<empleado.length; i++){
            alert(empleado[i]);

        }
    }
    else{
        alert('Usuario/Contraseña incorrecto..');
    }

}










