const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');

// General settings of the created window.
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), 
    }
  });
// https://www.electronjs.org/docs/latest/api/browser-window#class-browserwindow
// webPreferences.preload can only take in one absolute file.
// Split from there if you need to organize them.

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong!');
  createWindow();

  // For MacOS because the app will keep running if all windows are closed.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  })
})

// MacOS usually keeps the app running when windows are closed. 
app.on('window-all-closed', () => {
  console.log('Closing down. This app is running on %s.', process.platform);
  if (process.platform !== 'darwin') {
    app.quit();
  }
})
