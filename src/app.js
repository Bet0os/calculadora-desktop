const { ipcRenderer } = require("electron");

ipcRenderer.on("usuario", (event, usuario) => {
  document.getElementById("saludo").textContent = `Hola ${usuario.nombre} 👋`;
});

function calcular() {
  const num1 = parseFloat(document.getElementById("num1").value);

  const num2 = parseFloat(document.getElementById("num2").value);

  const operacion = document.getElementById("operacion").value;

  let resultado;

  switch (operacion) {
    case "+":
      resultado = num1 + num2;
      break;

    case "-":
      resultado = num1 - num2;
      break;

    case "*":
      resultado = num1 * num2;
      break;

    case "/":
      resultado = num1 / num2;
      break;
  }

  document.getElementById("resultado").textContent =
    `Este es tu Resultado: ${resultado}`;
}
