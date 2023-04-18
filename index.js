var textarea = document.getElementById("textArea");
var encriptar = document.getElementById("encriptar");
var desencriptar = document.getElementById("desencriptar");
var mensaje = document.getElementById("mensaje");
var respuesta = document.getElementById("respuesta");
var copiar = document.getElementById("copiar");

function encriptarTexto(texto){
  let respuesta = ""
  for (post in texto){
    char = texto[post]
    if('a' == char) {respuesta += "ai"; continue}
    if('e' == char) {respuesta += "enter"; continue}
    if('i' == char) {respuesta += "imes"; continue}
    if('o' == char) {respuesta += "ober"; continue}
    if('u' == char) {respuesta += "ufat"; continue}
    respuesta += char
  }
  return respuesta
}

function desencriptarTexto(texto){
  let respuesta = ""
  let post = 0;
  do{
    char = texto[post]
    if('a' == char && 'i' == texto[post+1]) {respuesta += "a";post+=2; continue}
    if('e' == char && 'n' == texto[post+1]) {respuesta += "e";post+=5; continue}
    if('i' == char && 'm' == texto[post+1]) {respuesta += "i";post+=4; continue}
    if('o' == char) {respuesta += "o";post+=4; continue}
    if('u' == char) {respuesta += "u";post+=4; continue}
    respuesta += char;
    post+=1
  }while(post < texto.length)
  return respuesta
}

encriptar.onclick = () => {
  mensaje.classList.add("hidenMensaje")
  copiar.style.display="flex";
  respuesta.textContent = encriptarTexto(textarea.value)
  textarea.value = "";
}

desencriptar.onclick = () => {
  mensaje.classList.add("hidenMensaje")
  copiar.style.display="flex";
  respuesta.textContent = desencriptarTexto(textarea.value)
  textarea.value = "";
}

copiar.onclick = () => {
  navigator.clipboard.writeText(respuesta.textContent);
}
