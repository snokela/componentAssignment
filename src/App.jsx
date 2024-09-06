import { useState } from 'react';
import headerImg from './assets/headerImg.png';
import Header from './components/Header';
import SelectProduct from './components/SelectProduct';
import SelectQuantity from './components/SelectQuantity';
import OrderInfo from './components/OrderInfo';


function App() {

  const [selectedIndex, setSelectedIndex] = useState('');
  const [quantity, setQuantity] = useState(0)

  console.log(quantity)
  // console.log(selectedIndex)

  const productNames = ['Smaak', 'Royal Canin', 'Orijen', 'Acana', 'Pedigree']
  const productPrices = [38, 51, 48, 55, 30]

  const selectedproductName = selectedIndex !== '' ? productNames[selectedIndex] : 'Ei valittu tuotetta';
  const selectedProductPrice = selectedIndex !== '' ? productPrices[selectedIndex] : 'Ei hintaa';

  console.log('Valittu tuote: ', selectedproductName)
  console.log('Valitun tuotteen hinta: ', selectedProductPrice)
  console.log('Valitun tuotteen määrä: ', quantity)

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
      <SelectQuantity
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <OrderInfo />
    </div>
  );
}

export default App;

