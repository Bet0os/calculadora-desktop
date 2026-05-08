const { ipcRenderer } = require("electron");

function ingresar() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;

  const mensaje = document.getElementById("mensaje");

  if (nombre === "" || apellido === "") {
    mensaje.style.color = "red";
    mensaje.textContent = "Completa todos los campos";
    return;
  }

  ipcRenderer.send("login-correcto", {
    nombre,
    apellido,
  });
}
