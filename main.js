require('dotenv').config();
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 400,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true, 
      contextIsolation: false
    }
  });

  win.loadFile('renderer.html');
}

app.whenReady().then(() => {
  createWindow();
});