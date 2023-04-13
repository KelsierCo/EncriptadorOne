var textarea = document.getElementById("textArea");

textarea.onclick = () => {
  if (textarea.value === "Ingrese el texto aquí") {
    textarea.value = "";
  }
};
