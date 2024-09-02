function Header({ image, title }) {
  return (
    <div>
      <img src={image} />
      <h1>{title}</h1>
    </div>
  );
}