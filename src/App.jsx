import { useState } from 'react';
import headerImg from './assets/headerImg.png';
import Header from './components/Header';
import SelectProduct from './components/SelectProduct';


function App() {

  const [selectedProduct, setSelectedProduct] = useState('');

  const products = [
    { id: 1, name: 'Smaak' },
    { id: 2, name: 'Royal Canin' },
    { id: 3, name: 'Orijen' },
  ]

  const productsPrice = [
    { id: 1, price: '42' },
    { id: 2, price: '51' },
    { id: 3, price: '48' },
  ]

return (
    <div>
      <Header
       image={headerImg}
       title={'Welcome to product page!'}
      />
      <SelectProduct
        products={products}
        productsPrice={productsPrice}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </div>
  );
}

export default App;

