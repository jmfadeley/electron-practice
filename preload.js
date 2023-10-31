const { contextBridge, ipcRenderer } = require('electron');

// contextBridge lets you bridge the gap between the DOM
// and NodeJS.
// RESEARCH: What methods are available to ipcRenderer?
// NOTE: Never expose ipcRenderer itself through the context
// bridge. That would allow arbitrary IPC messages, a vulnerability.
contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping')
  // Exposing variables can be done as well.
});