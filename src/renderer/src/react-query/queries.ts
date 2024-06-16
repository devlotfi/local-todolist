import { Group, Todo } from '@prisma/client';
import { TodoListInput } from '@shared/input/todo-list.input';
import { IPCMessages } from '@shared/ipc-messages';
import { QueryFunctionContext } from '@tanstack/react-query';

export const GROUP_LIST = async (): Promise<Group[]> => {
  return await window.electron.ipcRenderer.invoke(IPCMessages.GROUP_LIST);
};

export const TODO_LIST = async ({
  queryKey,
}: QueryFunctionContext<['TODO_LIST', TodoListInput]>): Promise<Todo[]> => {
  const todoListInput = queryKey[1];
  return await window.electron.ipcRenderer.invoke(
    IPCMessages.TODO_LIST,
    todoListInput
  );
};
