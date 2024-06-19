import { BrowserWindow, ipcMain } from 'electron';
import { IPCMessages } from '../shared/ipc-messages';
import os from 'os';

export const registerTitleBarIPCHandlers = (
  mainWindow: BrowserWindow
): void => {
  ipcMain.on(IPCMessages.MINIMIZE, () => {
    mainWindow.minimize();
  });

  ipcMain.on(IPCMessages.MAXIMIZE, () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });

  ipcMain.on(IPCMessages.CLOSE, () => {
    mainWindow.close();
  });

  ipcMain.handle(IPCMessages.CURRENT_OS, () => {
    return os.type();
  });
};
