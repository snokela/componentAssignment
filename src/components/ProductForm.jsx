import { useState } from 'react';
import SelectProduct from '../components/SelectProduct';
import SelectQuantity from '../components/SelectQuantity';
import OrderInfo from '../components/OrderInfo';
import '../styles/App.css';

function ProductForm() {

  const [selectedIndex, setSelectedIndex] = useState('');
  const [quantity, setQuantity] = useState(0)

  console.log(quantity)
  // console.log(selectedIndex)

  const productNames = ['Smaak 6kg', 'Royal Canin 6kg', 'Orijen 7kg', 'Acana 6kg', 'Pedigree 8kg']
  const productPrices = [38, 51, 48, 55, 30]

  const selectedproductName = selectedIndex !== '' ? productNames[selectedIndex] : '';
  const selectedProductPrice = selectedIndex !== '' ? productPrices[selectedIndex] : '';

  console.log('Valittu tuote: ', selectedproductName)
  console.log('Valitun tuotteen hinta: ', selectedProductPrice)
  console.log('Valitun tuotteen määrä: ', quantity)

  return (
    <div className='product-form-content'>
      <div>
        <h3>Select Product</h3>
        <div className='product-form-indent'>
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
        </div>
        <h3>Order info</h3>
        <div className='product-form-indent'>
          <OrderInfo
            productName={selectedproductName}
            productPrice={selectedProductPrice}
            quantity={quantity}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductForm;