import { Link, Outlet } from "react-router-dom";
import '../styles/App.css';

function NavigationBar() {
  return (
    <div className='navigationBar'>
      <Link to={'/'}>Component assignment</Link>
      <Link to={'/randomDog'}>Open data assignment</Link>
      <Outlet />
    </div>
  );
}

export default NavigationBar;