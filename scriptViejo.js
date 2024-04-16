
if (encendidoGeneral === false) {


    linea1oeste.classList.remove("encendida");
    linea1oeste.classList.add("apagada");

    linea26este.classList.remove("encendida");
    linea26este.classList.add("apagada");

    linea26oeste.classList.remove("encendida");
    linea26oeste.classList.add("apagada");

    linea3este.classList.remove("encendida");
    linea3este.classList.add("apagada");

    linea5este.classList.remove("encendida");
    linea5este.classList.add("apagada");

    linea5oeste.classList.remove("encendida");
    linea5oeste.classList.add("apagada");

    linea7este.classList.remove("encendida");
    linea7este.classList.add("apagada");

    entradaNorte.classList.remove("encendidaGrandeapagada");
    entradaNorte.classList.add("apagada");

    entradaSur.classList.remove("encendidaGrande");
    entradaSur.classList.add("apagada");
    return;
} else {


    linea1oeste.classList.remove("apagada");
    linea1oeste.classList.add("encendida");

    linea26este.classList.remove("apagada");
    linea26este.classList.add("encendida");

    linea26oeste.classList.remove("apagada");
    linea26oeste.classList.add("encendida");

    linea3este.classList.remove("apagada");
    linea3este.classList.add("encendida");

    linea5este.classList.remove("apagada");
    linea5este.classList.add("encendida");
    
    linea5oeste.classList.remove("apagada");
    linea5oeste.classList.add("encendida");

    linea7este.classList.remove("apagada");
    linea7este.classList.add("encendida");

    entradaNorte.classList.remove("apagada");
    entradaNorte.classList.add("encendidaGrande");

    entradaSur.classList.remove("apagada");
    entradaSur.classList.add("encendidaGrande");
  
}

//la 1a -> solo afecta a la 1 este
    
if (encendidoboca1a === false) {
    linea1este.classList.remove("encendida");
    linea1este.classList.add("apagada");
} else {
    linea1este.classList.remove("apagada");
    linea1este.classList.add("encendida");
}

//la 1b -> solo afecta a la 1 oeste


if (encendidoboca1b === false) {
    linea1oeste.classList.remove("encendida");
    linea1oeste.classList.add("apagada");
} else {
    linea1oeste.classList.remove("apagada");
    linea1oeste.classList.add("encendida");
}

//la 3a -> solo afecta a la 3 este


if (encendidoboca3a === false) {
    linea3este.classList.remove("encendida");
    linea3este.classList.add("apagada");
} else {
    linea3este.classList.remove("apagada");
    linea3este.classList.add("encendida");
}


//las bocas 2a, 2b, 6a y 6 b

if (!encendidoboca2a && !encendidoboca6a) {
    linea26este.classList.remove("encendida");
    linea26este.classList.add("apagada");
} else {
    linea26este.classList.remove("apagada");
    linea26este.classList.add("encendida");
}

if (!encendidoboca2b && !encendidoboca6b) {
    linea26oeste.classList.remove("encendida");
    linea26oeste.classList.add("apagada");
} else {
    linea26oeste.classList.remove("apagada");
    linea26oeste.classList.add("encendida");
}

if (!encendidoboca2a && !encendidoboca2b) {
    linea26oeste.classList.remove("encendida");
    linea26oeste.classList.add("apagada");

    linea26este.classList.remove("encendida");
    linea26este.classList.add("apagada");

    linea5este.classList.remove("encendida");
    linea5este.classList.add("apagada");

    linea5oeste.classList.remove("encendida");
    linea5oeste.classList.add("apagada");

    linea7este.classList.remove("encendida");
    linea7este.classList.add("apagada");

    entradaNorte.classList.remove("encendidaGrande");
    entradaNorte.classList.add("apagada");
    return

} else {

    linea26oeste.classList.remove("apagada");
    linea26oeste.classList.add("encendida");

    linea26este.classList.remove("apagada");
    linea26este.classList.add("encendida");

    linea5este.classList.remove("apagada");
    linea5este.classList.add("encendida");
    
    linea5oeste.classList.remove("apagada");
    linea5oeste.classList.add("encendida");

    linea7este.classList.remove("apagada");
    linea7este.classList.add("encendida");

    entradaNorte.classList.remove("apagada");
    entradaNorte.classList.add("encendidaGrande");

}


//la 5a -> solo afecta a la 5 este

if (encendidoboca5a === false) {
    linea5este.classList.remove("encendida");
    linea5este.classList.add("apagada");
} else {
    linea5este.classList.remove("apagada");
    linea5este.classList.add("encendida");
}

//la 5b -> solo afecta a la 5 oeste

if (encendidoboca5b === false) {
    linea5oeste.classList.remove("encendida");
    linea5oeste.classList.add("apagada");
} else {
    linea5oeste.classList.remove("apagada");
    linea5oeste.classList.add("encendida");
}


//la 7a -> solo afecta a la 7 este


if (encendidoboca7a === false) {
    linea7este.classList.remove("encendida");
    linea7este.classList.add("apagada");
} else {
    linea7este.classList.remove("apagada");
    linea7este.classList.add("encendida");
}

