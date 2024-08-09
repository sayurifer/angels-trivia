function pintarNombre() {
    document.getElementById("saludo").innerHTML += localStorage.getItem("name"); 
}

pintarNombre()

const temas = [
    "POP", "REGGAETON", "K-POP"
]