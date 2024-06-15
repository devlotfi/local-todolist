import { RouterProvider } from 'react-router-dom';
import useRouter from './hooks/use-router.hook';

const App = (): JSX.Element => {
  const { router } = useRouter();

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
