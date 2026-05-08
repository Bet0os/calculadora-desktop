const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile(path.join(__dirname, "src", "login.html"));
}

app.whenReady().then(() => {
  createWindow();

  ipcMain.on("login-correcto", (event, usuario) => {
    mainWindow.loadFile(path.join(__dirname, "src", "app.html"));

    mainWindow.webContents.once("did-finish-load", () => {
      mainWindow.webContents.send("usuario", usuario);
    });
  });
});
