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

function ejecutar4 () {
    var num = document.getElementById("ncons").value;
    for(let i = 0; i <= num; i++){
        document.write(`${i}, `);
    }
}

function ejecutar5() {
    var num1 = parseInt(document.getElementById("comNum1").value);
    var num2 = parseInt(document.getElementById("comNum2").value);
    
    if(num1 == num2){
        alert("Los números ingresados son iguales");
    }else if(num1 < num2){
        alert("El número 2 es mayor que el número 1")
    }else(
        alert("El número 1 es mayor que el número 2")
    )
}