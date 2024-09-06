import '../styles/App.css';

function Header({ image, title }) {
  return (
    <div className='header-content'>
      <img src={image} alt="Header image" className='header-img' />
      <h1>{title}</h1>
    </div>
  );
}

export default Header;