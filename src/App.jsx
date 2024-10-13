import { createBrowserRouter, Link, Outlet, RouterProvider, } from 'react-router-dom';
import ComponentUI from './components/ComponentUI';
import OpenDataUI from './components/OpenDataUI';
import './styles/App.css';
import NavigationBar from './components/NavigationBar';

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <NavigationBar />,
    children: [
      {
        path: '/',
        element: <ComponentUI />
      },
      {
        path: '/randomDog',
        element: <OpenDataUI />
      },
    ]
  },
]);

function App() {
  return (
    <div className='app-content'>
      <RouterProvider router={myRouter} />
    </div>
  );
}

export default App;
