//var gpm = document.getElementById("num1").value;
//var rpm = document.getElementById("num2").value;//
//var resultado = gpm + rpm;//
//alert(resultado);//
function calcular_suma() {
    var gpm = document.getElementById("num1").value;
    var rpm = document.getElementById("num2").value;

    //convertir a numero//
    gpm = parseInt(gpm);
    rpm = parseInt(rpm);

    var resultado = gpm + rpm;

    alert(resultado);
}

function calcular_resta() {
    var gpm = document.getElementById("num1").value;
    var rpm = document.getElementById("num2").value;

    //convertir a numero//
    gpm = parseInt(gpm);
    rpm = parseInt(rpm);

    var resultado = gpm - rpm;

    alert(resultado);
}
function calcular_multiplicacion() {
    var gpm = document.getElementById("num1").value;
    var rpm = document.getElementById("num2").value;

    //convertir a numero//
    gpm = parseInt(gpm);
    rpm = parseInt(rpm);

    var resultado = gpm * rpm;

    alert(resultado);
}
function calcular_division() {
    var gpm = document.getElementById("num1").value;
    var rpm = document.getElementById("num2").value;

    //convertir a numero//
    gpm = parseInt(gpm);
    rpm = parseInt(rpm);

    var resultado = gpm / rpm;

    alert(resultado);
    
}
function calcularcuanto_sale() {
    var cel = document.getElementById("ingresos").value;
    var est = document.getElementById("costos").value;
    var ino = document.getElementById("impuestos").value;

    //convertir a numero//
    cel = parseInt(cel);
    est = parseInt(est);
    ino = parseInt(ino);

    var resultado = cel * (ino / 100);  
    var grpm = cel - est - resultado;

    alert(grpm);
}
