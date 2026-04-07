let boton_volver = document.getElementById("boton_volver");

boton_volver.addEventListener("click", function(){
    window.location.href = "index.html";
})

let boton_siguiente_t1_prologo = document.getElementById("boton_siguiente_t1_prologo");

if (boton_siguiente_t1_prologo != null){
    boton_siguiente_t1_prologo.addEventListener("click", function(){
        window.location.href = "t1_1.html";
    })
}

let boton_anterior_t1_1 = document.getElementById("boton_anterior_t1_1");

if (boton_anterior_t1_1 != null){
    boton_anterior_t1_1.addEventListener("click", function(){
        window.location.href = "t1_prologo.html";
    })
}

let boton_siguiente_t1_1 = document.getElementById("boton_siguiente_t1_1");

if (boton_siguiente_t1_1 != null){
    boton_siguiente_t1_1.addEventListener("click", function(){
        window.location.href = "t1_2.html";
    })
}