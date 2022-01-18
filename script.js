
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

//--------------- MI EXPERIENCIA CON EL CHALLENGUE ---------------//

//Para el manejo del encriptado pense en una forma de poder recorrer el texto
//e ir remplazando vocal por vocal, entonces busque funciones que me ayudaran e
//implemente el siguiente metodo:
//----ENCRIPTAR----//
//-Guardar el texto en un array, letra por letra, para ello obtuve la posicion de cada indice del string gracias a la funcion charAt()
//-Luego recorrer el array e ir remplazando los datos, para ello use la funcion splice()
//-Use concat() para pasar todo el array encriptado a un string
//----DESENCRIPTAR----//
//-En la funcion desencriptar fue mas sencillo porque con la funcion replace cambie los datos correspondientes.


//----- Funcion para encriptar el texto -----//
function encriptarTexto(texto){

    arrayTexto = [];
    var largoTexto = texto.length;
    
    //Guardamos el texto dentro del array
    for(var indiceTexto = 0; indiceTexto < largoTexto; indiceTexto++){
        arrayTexto.push(texto.charAt(indiceTexto));
    }
    
    var largoArray = arrayTexto.length;

    //Recorrer el array para intercambiar el texto segun corresponda
    for(var indiceArray = 0; indiceArray < largoArray; indiceArray++){
        if(arrayTexto[indiceArray] == 'e'){
            arrayTexto.splice(indiceArray, 1, 'enter');
        }else if(arrayTexto[indiceArray] == 'i'){
            arrayTexto.splice(indiceArray, 1, 'imes');
        }else if(arrayTexto[indiceArray] == 'a'){
            arrayTexto.splice(indiceArray, 1, 'ai');
        }else if(arrayTexto[indiceArray] == 'o'){
            arrayTexto.splice(indiceArray, 1, 'ober');
        }else if(arrayTexto[indiceArray] == 'u'){
            arrayTexto.splice(indiceArray, 1, 'ufat');
        }
    }

    //Pasar los indices del array a un string
    var textoEncriptado = "".concat(...arrayTexto);
    
    //Imprimir el resultado en el input
    console.log(textoEncriptado);
    var textoSalida = document.querySelector("#msg");
    textoSalida.value = textoEncriptado;
}

//----- Funcion para Desencriptar el texto -----//
function desencriptarTexto(texto){
    //Remplazar los valores correspondientes
    var textoDesencriptado = texto.replace(/ai/g,'a');
    textoDesencriptado = textoDesencriptado.replace(/enter/g,'e');
    textoDesencriptado = textoDesencriptado.replace(/imes/g,'i');
    textoDesencriptado = textoDesencriptado.replace(/ober/g,'o');
    textoDesencriptado = textoDesencriptado.replace(/ufat/g,'u');

    //Imprimir el resultado en el input
    console.log(textoDesencriptado);
    var textoSalida = document.querySelector("#msg");
    textoSalida.value = textoDesencriptado;
}

//----- Capturando los botones y pasandoles las funciones correspondientes -----//
var botonEncriptar = document.querySelector("#btn-encriptar");
botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var textoEntrada = document.querySelector("#input-texto").value;
    encriptarTexto(textoEntrada);
});

var botonDesencriptar = document.querySelector("#btn-desencriptar");
botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var textoEntrada = document.querySelector("#input-texto").value;
    desencriptarTexto(textoEntrada);
});


//----- Funcion para copiar en el portapapeles -----//
function copy() {
    var copyText = document.querySelector("#msg");
    copyText.select();
    document.execCommand("copy");
}  
document.querySelector("#btn-copy").addEventListener("click", copy);

//----- Funcion para limpiar los inputs -----//
function limpiar(input){
    input.value= "";
}

var botonLimpiarEntrada = document.querySelector("#btn-limpiarEntrada");
botonLimpiarEntrada.addEventListener("click",function(event){
    event.preventDefault();
    var textoEntrada = document.querySelector("#input-texto");
    limpiar(textoEntrada);
});

var botonLimpiarSalida = document.querySelector("#btn-limpiarSalida");
botonLimpiarSalida.addEventListener("click",function(event){
    event.preventDefault();
    var textoSalida = document.querySelector("#msg");
    limpiar(textoSalida);
});
