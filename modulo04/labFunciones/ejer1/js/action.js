/* 
function alertCaja(color){
    alert('El color es: ' +color)
}

let boton = document.getElementsByTagName("button");
for(let i = 0; i< boton.length; i++){
    boton[i].onclick = function(){
        colorearCaja(this.innerHTML);
    }
 
}

function colorearCaja(color){
    alert('El color es ' +color);
    document.getElementById('caja').innerHTML = 'Él color es' + color;
    document.getElementById('caja').style.background = color;
} */

console.log($);

const panel = $('#panel');
const paneles = $('.paneles');
const boton = $('button'); 


boton.on('click' , function(){
    alert('Hiciste click en el boton');
});

boton.click(function(){
    alert('Hiciste click en el boton');
});