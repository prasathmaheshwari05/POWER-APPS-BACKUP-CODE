const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Important: use loadFile for Vite build
  win.loadFile(path.join(__dirname, "dist", "index.html"));
}

app.whenReady().then(createWindow);
