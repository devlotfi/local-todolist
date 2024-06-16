/* eslint-disable @typescript-eslint/no-unused-vars */
import { ipcMain } from 'electron';
import { IPCMessages } from '../shared/ipc-messages';
import { prismaClient } from './prisma-client';
import { AddGroupInput } from '../shared/input/add-group.input';
import { EditGroupInput } from '../shared/input/edit-group.input';
import { DeleteGroupInput } from '../shared/input/delete-group.input';

export const registerGroupIPCHandlers = (): void => {
  ipcMain.handle(IPCMessages.GROUP_LIST, async () => {
    return await prismaClient.group.findMany();
  });

  ipcMain.handle(
    IPCMessages.ADD_GROUP,
    async (_event, addGroupInput: AddGroupInput) => {
      return await prismaClient.group.create({
        data: {
          name: addGroupInput.name,
        },
      });
    }
  );

  ipcMain.handle(
    IPCMessages.EDIT_GROUP,
    async (_event, editGroupInput: EditGroupInput) => {
      return await prismaClient.group.update({
        where: {
          id: editGroupInput.id,
        },
        data: {
          name: editGroupInput.name,
        },
      });
    }
  );

  ipcMain.handle(
    IPCMessages.DELETE_GROUP,
    async (_event, deleteGroupInput: DeleteGroupInput) => {
      return await prismaClient.group.delete({
        where: {
          id: deleteGroupInput.id,
        },
      });
    }
  );
};
