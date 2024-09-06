import headerImg from './assets/headerImg.png';
import Header from './components/Header';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <div>
      <Header
        image={headerImg}
        title={'Welcome to product page!'}
      />
      <ProductForm />
    </div>
  );
}

export default App;

