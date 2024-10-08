import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ComponentUI from './components/ComponentUI';
import OpenDataUI from './components/OpenDataUI';

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <ComponentUI />
  },
  {
    path: '/randomDog',
    element: <OpenDataUI />
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={myRouter} />
      {/* <ComponentUI />
      <OpenDataUI /> */}
    </div>
  );
}

export default App;

