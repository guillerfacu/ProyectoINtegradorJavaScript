
function colorearCaja(color){
    alert('El color es: ' +color)
}

let boton = document.getElementsByTagName("button");
for(let i = 0; i< boton.length; i++){
    boton[i].onclick = function(){
        colorearCaja(this.innerHTML);
    }
}

function crearCaja(){
    
}