function Header({ image, title }) {
  return (
    <div>
      <img src={image} alt="Header image" />
      <h1>{title}</h1>
    </div>
  );
}

export default Header;