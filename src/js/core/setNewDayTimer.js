const { ipcRenderer } = require("electron");

/**
 * Function to new day start.
 */
function setNewDayTimer() {
  if (globalThis.newdaytimer)
    clearTimeout(newdaytimer);
  let distance;
  const now = new Date();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  distance = tomorrow - now;
  globalThis.newdaytimer = setTimeout(() => ipcRenderer.invoke("newDay"), distance);
}

export default setNewDayTimer;