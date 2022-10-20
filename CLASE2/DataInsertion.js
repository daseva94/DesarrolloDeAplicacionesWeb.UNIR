/* una vez dominado el método, es posible aplicarlos empleando cada uno de los casos posibles arrojado por el lenguaje */

function ejecutar (){
    alert('Ejecutando JavaScript');

    /* capturar el valor del input */

    var numero = document.getElementById("NumberTest").value;
    alert(numero)
}

function ejecutar2(){
    var numero = document.getElementById("PosOrNeg").value;
    if(numero>0){
        alert(`El número (${numero}) es positivo`);
    }else{
        alert(`El número (${numero}) es negativo`)
    }
}

function ejecutar3 () {
    var numero1 = document.getElementById("sumNum1").value;
    var numero2 = document.getElementById("sumNum2").value;
    var suma = parseInt(numero1) + parseInt(numero2);
    alert(`El valor de la suma es igual a =  ${suma}`);
}