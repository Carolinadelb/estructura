window.onload = () => {

}
function boton1(){
  let texto1 = document.getElementById("text1").value;
  let texto2 = document.getElementById("n1").value;
  document.getElementById("res").innerHTML = cipher(texto1,texto2);
//  document.getElementById("res").innerHTML = texto2;

  
}
function cipher(texto,desplazamiento){
  //para guardar las letras del nuevo texto
  let textCipher = "";
  let caracternumerico;
  let desplazacaracter;
  let caracterdesplazado;
  desplazamiento = parseInt(desplazamiento);
  //recorriendo el texto ingresado
  for (let i=0; i<texto.length;i++){
    //transformo un caracter a su valor ascii numerico 
    caracternumerico = texto.charCodeAt(i);
    //le aumento x lugares a cada caracter numerico
    desplazacaracter = caracternumerico + desplazamiento;
    //vuelvo a transformar a string el caracter numerico desplazado
    caracterdesplazado = String.fromCharCode(desplazacaracter);
    //sumo todos los caracteres desplazados en un solo string
    textCipher += caracterdesplazado;
  }
   //retornando el valor
 return "Cifrado: " + textCipher;
 
}

function boton2(){
  let texto3 = document.getElementById("text2").value;
  let texto4 = document.getElementById("n2").value;
  document.getElementById("res2").innerHTML = decipher(texto3,texto4);
}

function decipher(texto,desplazamiento){
let textDecipher = "";
let caracternumerico;
let desplazacaracter;
let caracterdesplazado;
desplazamiento = parseInt(desplazamiento);
//recorriendo el texto ingresado
for (let i=0; i<texto.length;i++){
  //transformo un caracter a su valor ascii numerico 
  caracternumerico = texto.charCodeAt(i);
  //le rebajo x lugares a cada caracter numerico
  desplazacaracter = caracternumerico - desplazamiento;
  //vuelvo a transformar a string el caracter numerico desplazado
  caracterdesplazado = String.fromCharCode(desplazacaracter);
  //sumo todos los caracteres desplazados en un solo string
  textDecipher += caracterdesplazado;
}
//respuesta del cifrado a normal
  return "Respuesta: " + textDecipher;

}









