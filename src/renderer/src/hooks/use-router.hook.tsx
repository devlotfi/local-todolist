import SidebarLayout from '@renderer/layout/sidebar-layout.component';
import TitleBarLayout from '@renderer/layout/title-bar-layout.component';
import TodoList from '@renderer/pages/todo-list.component';
import { createHashRouter } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useRouter = () => {
  const router = createHashRouter([
    {
      path: '/',
      element: (
        <TitleBarLayout>
          <SidebarLayout></SidebarLayout>
        </TitleBarLayout>
      ),
      children: [
        {
          path: '/',
          element: <h1>Select a group to get started</h1>,
        },
        {
          path: '/:groupId',
          element: <TodoList></TodoList>,
        },
      ],
    },
  ]);

  return { router };
};

export default useRouter;
