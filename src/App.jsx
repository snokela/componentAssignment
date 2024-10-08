import { createBrowserRouter, Link, Outlet, RouterProvider, } from 'react-router-dom';
import ComponentUI from './components/ComponentUI';
import OpenDataUI from './components/OpenDataUI';


const NavigationBar = () => {
  return (
    <div>
      <Link to={'/'}>Component assignment</Link>
      <Link to={'/randomDog'}>Open data assignment</Link>
      <Outlet />
    </div>
  );
}

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
    <div>
      <RouterProvider router={myRouter} />
      {/* <ComponentUI />
      <OpenDataUI /> */}
    </div>
  );
}

export default App;


