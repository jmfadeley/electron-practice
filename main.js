const { app, BrowserWindow } = require('electron');

// General settings of the created window.
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
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
