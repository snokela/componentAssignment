import { createBrowserRouter, Link, Outlet, RouterProvider, } from 'react-router-dom';
import ComponentUI from './components/ComponentUI';
import OpenDataUI from './components/OpenDataUI';
import './styles/App.css';


const NavigationBar = () => {
  return (
    <div className='navigationBar'>
      <Link to={'/'}>Component assignment</Link>
      <Link to={'/randomDog'}>Open data assignment</Link>
      <Outlet />
    </div>
  );
}


const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
