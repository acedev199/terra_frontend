import { app, BrowserWindow, Menu } from "electron";
import "path";
import __cjs_mod__ from "node:module";
const __filename = import.meta.filename;
const __dirname = import.meta.dirname;
const require2 = __cjs_mod__.createRequire(import.meta.url);
let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // preload: path.join(__dirname, 'electron/preload/index.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: true
      // Enable web security
    }
  });
  mainWindow.loadURL("http://localhost:3001");
  Menu.setApplicationMenu(null);
  mainWindow.on("closed", () => mainWindow = null);
}
app.whenReady().then(async () => {
  createWindow();
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
