const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let win;

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,   // Permite usar Node.js dentro da página web
      contextIsolation: false  // Desabilita a proteção de isolamento de contexto
    }
  });

  // Carrega o arquivo login.html da pasta 'login'
  win.loadFile(path.join(__dirname, 'login/login.html'));

  // Lida com a navegação para a página inicial após o login
  ipcMain.on('login-success', () => {
    console.log('Carregando inicio.html');
    // Carrega o arquivo inicio.html da pasta 'inicio'
    win.loadFile(path.join(__dirname, 'inicio/inicio.html'));
  });
};

app.whenReady().then(() => {
  createWindow();

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
