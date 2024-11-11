import { app, BrowserWindow, dialog, ipcMain, Menu } from 'electron';
import * as path from 'path';

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // preload: path.join(__dirname, 'electron/preload/index.js'),
            contextIsolation: true,
            nodeIntegration: false,
            webSecurity: true // Enable web security
        }
    });

    // Load Vite development server URL
    mainWindow.loadURL('http://localhost:3001');
    Menu.setApplicationMenu(null);
    mainWindow.on('closed', () => (mainWindow = null));
}

app.whenReady().then(async () => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
