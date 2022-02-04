/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/
 

function encriptar(){


    var palabra = document.getElementsByTagName("input")[0].value;
    var palabraCodificada = palabra.replace (/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat');

    document.getElementById("input-resultado").value=palabraCodificada

   

}

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function desencriptar(){


    var palabraEncriptada = document.getElementsByTagName("input")[0].value;
    var palabraDecodificada = palabraEncriptada.replace (/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u');

    document.getElementById("input-resultado").value= palabraDecodificada

   

}

//FUNCION COPIAR

function copy(){


    var resultado = document.getElementById("input-resultado");
    resultado.select();
    document.execCommand('copy');
    alert("copiado")
}

