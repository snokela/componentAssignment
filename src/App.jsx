import { useState } from 'react';
import headerImg from './assets/headerImg.png';
import Header from './components/Header';
import SelectProduct from './components/SelectProduct';


function App() {

  const [selectedProductId, setSelectedProductId] = useState(0);

  const productsName = ['Smaak', 'Royal Canin', 'Orijen', 'Acana',  'Pedigree']
  const productsPrices = ['38', '51', '48', '55',  '30' ]

  // const selectedProduct = products.find(product => product.id === selectedProductId);
  // const productName = selectedProduct ? selectedProduct.name : 'Tuntematon tuote';
  // console.log(productName)


return (
    <div>
      <Header
       image={headerImg}
       title={'Welcome to product page!'}
      />
      <SelectProduct
        products={productsName}
        productsPrice={productsPrices}
        selectedProductId={selectedProductId}
        setSelectedProductId={setSelectedProductId}
      />
    </div>
  );
}

export default App;

