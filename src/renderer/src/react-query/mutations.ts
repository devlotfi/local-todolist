import { Group, Todo } from '@prisma/client';
import { AddGroupInput } from '@shared/input/add-group.input';
import { AddTodoInput } from '@shared/input/add-todo.input';
import { DeleteGroupInput } from '@shared/input/delete-group.input';
import { DeleteTodoInput } from '@shared/input/delete-todo.input';
import { EditGroupInput } from '@shared/input/edit-group.input';
import { EditTodoInput } from '@shared/input/edit-todo.input';
import { IPCMessages } from '@shared/ipc-messages';

export const ADD_GROUP = async (
  addGroupInput: AddGroupInput
): Promise<Group> => {
  return await window.electron.ipcRenderer.invoke(
    IPCMessages.ADD_GROUP,
    addGroupInput
  );
};

export const EDIT_GROUP = async (
  editGroupInput: EditGroupInput
): Promise<Group> => {
  return await window.electron.ipcRenderer.invoke(
    IPCMessages.EDIT_GROUP,
    editGroupInput
  );
};

export const DELETE_GROUP = async (
  deleteGroupInput: DeleteGroupInput
): Promise<void> => {
  return await window.electron.ipcRenderer.invoke(
    IPCMessages.DELETE_GROUP,
    deleteGroupInput
  );
};

export const ADD_TODO = async (addTodoInput: AddTodoInput): Promise<Todo> => {
  return await window.electron.ipcRenderer.invoke(
    IPCMessages.ADD_TODO,
    addTodoInput
  );
};

export const EDIT_TODO = async (
  editTodoInput: EditTodoInput
): Promise<Todo> => {
  return await window.electron.ipcRenderer.invoke(
    IPCMessages.EDIT_TODO,
    editTodoInput
  );
};

export const DELETE_TODO = async (
  deleteTodoInput: DeleteTodoInput
): Promise<void> => {
  return await window.electron.ipcRenderer.invoke(
    IPCMessages.DELETE_TODO,
    deleteTodoInput
  );
};
