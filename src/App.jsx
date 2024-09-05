import { useState } from 'react';
import headerImg from './assets/headerImg.png';
import Header from './components/Header';
import SelectProduct from './components/SelectProduct';


function App() {

  const [selectedProductId, setSelectedProductId] = useState('');

  const products = [
    { id: 1, name: 'Smaak', size: 6 },
    { id: 2, name: 'Royal Canin', size:6},
    { id: 3, name: 'Orijen', size:7 },
    { id: 4, name: 'Acana', size:6 },
    { id: 5, name: 'Pedigree', size:8 },
  ]

  const selectedProduct = products.find(product => product.id === selectedProductId);
  const productName = selectedProduct ? selectedProduct.name : 'Tuntematon tuote';
  console.log(productName)


  const productsPrice = [
    { id: 1, price: '38' },
    { id: 2, price: '51' },
    { id: 3, price: '48' },
    { id: 4, price: '55' },
    { id: 5, price: '30' },
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
        selectedProductId={selectedProductId}
        setSelectedProductId={setSelectedProductId}
      />
    </div>
  );
}

export default App;

