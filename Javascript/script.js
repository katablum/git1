console.log("Entramos a la pagina!");

function bienvenido(){
    alert("Bienvenido a la pagina de Perfil!");
}

function eliminar(elemento){
    elemento.remove();
    confirm("seguro que quieres cerrar sesion?");
}
function cambiar_texto(elemento_h1){
    if(elemento_h1.innerText=="Perfil"){
        elemento_h1.innerText="Profile"
    }
    else{
        elemento_h1.innerText = "Perfil";
    }
}
function cambia_imagen(elemento_img){
    elemento_img.src="img/sofia.jpg";
}
function regresa_imagen(elemento_img){
    elemento_img.src="img/perfil.jpg";
}