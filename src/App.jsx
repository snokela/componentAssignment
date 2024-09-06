import { useState } from 'react';
import headerImg from './assets/headerImg.png';
import Header from './components/Header';
import SelectProduct from './components/SelectProduct';


function App() {

  const [selectedIndex, setSelectedIndex ] = useState(0);

  console.log(selectedIndex)

  const productNames = ['Smaak', 'Royal Canin', 'Orijen', 'Acana',  'Pedigree']
  const productPrices = ['38', '51', '48', '55',  '30' ]

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
        productNames={productNames}
        productPrices={productPrices}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </div>
  );
}

export default App;

