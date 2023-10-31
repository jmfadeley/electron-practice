const information = document.getElementById('info');
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()}).`;

const callHandler = async () => {
  const response = await window.versions.ping();
  console.log(response);
}

callHandler();
