//botones - bocas de las llaves de las naves

const general = document.querySelector('.btnGeneral');
const boca1a = document.querySelector('.boca1a');
const boca1b = document.querySelector('.boca1b');
const boca2a = document.querySelector('.boca2a');
const boca2b = document.querySelector('.boca2b');
const boca3a = document.querySelector('.boca3a');
const boca5a = document.querySelector('.boca5a');
const boca5b = document.querySelector('.boca5b');
const boca6a = document.querySelector('.boca6a');
const boca6b = document.querySelector('.boca6b');
const boca7a = document.querySelector('.boca7a');

console.log(general)

//lineas de agua
const entradaSur = document.querySelector(".entradaSur");
const entradaNorte = document.querySelector('.entradaNorte');
const linea1este = document.querySelector('.linea1este');
const linea1oeste = document.querySelector('.linea1oeste');
const linea26este = document.querySelector('.linea26este');
const linea26oeste = document.querySelector('.linea26oeste');
const linea3este = document.querySelector('.linea3este');
const linea5este = document.querySelector('.linea5este');
const linea5oeste = document.querySelector('.linea5oeste');
const linea7este = document.querySelector('.linea7este');

console.log("linea 5");
console.log(boca5b);
console.log(linea5este);

//los switch

let encendidoGeneral = true
let encendidoboca1a = true
let encendidoboca1b = true
let encendidoboca2a = true
let encendidoboca2b = true
let encendidoboca3a = true
let encendidoboca5a = true
let encendidoboca5b = true
let encendidoboca6a = true
let encendidoboca6b = true
let encendidoboca7a = true



boca1a.addEventListener("click", ()=> {
    encendidoboca1a = !encendidoboca1a;
    boca1a.classList.toggle("active");
    console.log(encendidoboca1a);
    comprobacionBocas();
    });
boca1b.addEventListener("click", ()=> {
    encendidoboca1b = !encendidoboca1b;
    boca1b.classList.toggle("active");
    console.log(encendidoboca1b);
    comprobacionBocas();
    });
boca2a.addEventListener("click", ()=> {
    encendidoboca2a = !encendidoboca2a;
    boca2a.classList.toggle("active");
    console.log(encendidoboca2a);
    comprobacionBocas();
    });
boca2b.addEventListener("click", ()=> {
    encendidoboca2b = !encendidoboca2b;
    boca2b.classList.toggle("active");
    console.log(encendidoboca2b);
    comprobacionBocas();
    });
boca3a.addEventListener("click", ()=> {
    encendidoboca3a = !encendidoboca3a;
    boca3a.classList.toggle("active");
    console.log(encendidoboca3a);
    comprobacionBocas();
    });
boca5a.addEventListener("click", ()=> {
    encendidoboca5a = !encendidoboca5a;
    boca5a.classList.toggle("active");
    console.log(encendidoboca5a);
    comprobacionBocas();
    });
boca5b.addEventListener("click", ()=> {
    encendidoboca5b = !encendidoboca5b;
    boca5b.classList.toggle("active");
    console.log(encendidoboca5b);
    comprobacionBocas();
    });
boca6a.addEventListener("click", ()=> {
    encendidoboca6a = !encendidoboca6a;
    boca6a.classList.toggle("active");
    console.log(encendidoboca6a);
    comprobacionBocas();
    });
boca6b.addEventListener("click", ()=> {
    encendidoboca6b = !encendidoboca6b;
    boca6b.classList.toggle("active");
    console.log(encendidoboca6b);
    comprobacionBocas();
    });
boca7a.addEventListener("click", ()=> {
    encendidoboca7a = !encendidoboca7a;
    boca7a.classList.toggle("active");
    console.log(encendidoboca7a);
    comprobacionBocas();
    });

general.addEventListener("click", () => {
    encendidoGeneral = !encendidoGeneral;    
    general.classList.toggle("active");
    console.log(encendidoGeneral);
    comprobacionBocas();
});

function comprobacionBocas () {
    console.log("vamos a comprobar bocas")

// La general

//Comprobamos la 1 este (se cierra con la 1a y la general)
    if (encendidoGeneral === false) {
        linea1este.classList.remove("encendida");
        linea1este.classList.add("apagada");
    } else {
        linea1este.classList.remove("apagada");
        linea1este.classList.add("encendida");
    }
    
    if (encendidoboca1a === false) {
        linea1este.classList.remove("encendida");
        linea1este.classList.add("apagada");
    } else {
        linea1este.classList.remove("apagada");
        linea1este.classList.add("encendida");
    }



}