document.getElementById("button").addEventListener("click",guardarnombre);
function guardarnombre(){
let nombredeusuario =  document.getElementById("nombre").value ;
localStorage.setItem("name",nombredeusuario);

}