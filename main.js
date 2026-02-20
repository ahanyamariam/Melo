const { app, BrowserWindow } = require("electron");
const path = require("path");


function createWindow() {
    const win = new BrowserWindow({
        width: 295,
        height: 460,
        resizable: false,
        maximizable: false,
        fullscreenable: false,
        frame: true,
        titleBarStyle: 'hidden',
        trafficLightPosition: { x: 10, y: 10 },
        backgroundColor: '#F7C1F0',
        icon: path.join(__dirname, 'icon.png'),  // ← moved INSIDE here
        webPreferences: {
            contextIsolation: true
        }
    });

    win.loadFile("index.html");
    win.webContents.openDevTools();
    win.webContents.on('did-finish-load', () => {
        win.webContents.executeJavaScript(
            `window.JAMENDO_CLIENT_ID = "${process.env.JAMENDO_CLIENT_ID}"`
        );
    });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform != "darwin") app.quit();
});