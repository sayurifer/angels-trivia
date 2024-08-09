
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