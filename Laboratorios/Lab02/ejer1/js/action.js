

let rol = prompt('Cual es tu rol?');
if (rol == 'admin' || rol=='recursos'){
    let clave = prompt('Cual es tu clave?');

    while(clave != '1234'){
        clave = prompt('No es , Cual es tu clave?');
    }

    let nombre = prompt('Cual es su nombre de usuario');
    
}
let nombreUsuario = document.getElementById('remane');
nombreUsuario.innerHTML = nombre;