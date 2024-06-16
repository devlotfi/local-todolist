/* eslint-disable @typescript-eslint/no-unused-vars */
import { ipcMain } from 'electron';
import { IPCMessages } from '../shared/ipc-messages';
import { prismaClient } from './prisma-client';
import { TodoListInput } from '../shared/input/todo-list.input';
import { AddTodoInput } from '../shared/input/add-todo.input';
import { EditTodoInput } from '../shared/input/edit-todo.input';
import { DeleteTodoInput } from '../shared/input/delete-todo.input';

export const registerTodoIPCHandlers = (): void => {
  ipcMain.handle(
    IPCMessages.TODO_LIST,
    async (_event, todoListInput: TodoListInput) => {
      return await prismaClient.todo.findMany({
        where: {
          groupId: todoListInput.groupId,
        },
      });
    }
  );

  ipcMain.handle(
    IPCMessages.ADD_TODO,
    async (_event, addTodoInput: AddTodoInput) => {
      return await prismaClient.todo.create({
        data: {
          groupId: addTodoInput.groupId,
          title: addTodoInput.title,
        },
      });
    }
  );

  ipcMain.handle(
    IPCMessages.EDIT_TODO,
    async (_event, editTodoInput: EditTodoInput) => {
      return await prismaClient.todo.update({
        where: {
          id: editTodoInput.id,
        },
        data: {
          completed: editTodoInput.completed,
        },
      });
    }
  );

  ipcMain.handle(
    IPCMessages.DELETE_TODO,
    async (_event, deleteTodoInput: DeleteTodoInput) => {
      return await prismaClient.todo.delete({
        where: {
          id: deleteTodoInput.id,
        },
      });
    }
  );
};
