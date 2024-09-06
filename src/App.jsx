import { useState } from 'react';
import headerImg from './assets/headerImg.png';
import Header from './components/Header';
import SelectProduct from './components/SelectProduct';


function App() {

  const [selectedIndex, setSelectedIndex] = useState('');

  // console.log(selectedIndex)

  const productNames = ['Smaak', 'Royal Canin', 'Orijen', 'Acana', 'Pedigree']
  const productPrices = [38, 51, 48, 55, 30]

  const selectedproductName = selectedIndex !== '' ? productNames[selectedIndex] : 'Ei valittu tuotetta';
  const selectedProductPrice = selectedIndex !== '' ? productPrices[selectedIndex] : 'Ei hintaa';

  console.log('Valittu tuote: ', selectedproductName)
  console.log('Valitun tuotteen hinta: ', selectedProductPrice)

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

