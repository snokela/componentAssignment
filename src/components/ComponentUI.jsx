import { useState } from 'react';
import SelectProduct from './SelectProduct';
import SelectQuantity from './SelectQuantity';
import OrderInfo from './OrderInfo';
import '../styles/ComponentUI.css';
import headerImg from '../assets/componentHeaderImg.png';
import Header from './Header';
import ProductForm from './ProductForm';

function ComponentUI() {

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [quantity, setQuantity] = useState(1)

  const productNames = ['Smaak 6kg', 'Royal Canin 6kg', 'Orijen 7kg', 'Acana 6kg', 'Pedigree 8kg']
  const productPrices = [38, 51, 48, 55, 30]

  const selectedproductName = selectedIndex !== '' ? productNames[selectedIndex] : '';
  const selectedProductPrice = selectedIndex !== '' ? productPrices[selectedIndex] : '';

  return (
    <div className='product-form-content'>
      <div>
        <Header
          image={headerImg}
          title={'Welcome to product page!'}
        />
        <div className='product-form-indent'>
          <ProductForm
            productNames={productNames}
            productPrices={productPrices}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>
        {selectedIndex >= 0 && (
          <>
            <div className='product-form-indent'>
              <OrderInfo
                productName={selectedproductName}
                productPrice={selectedProductPrice}
                quantity={quantity}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ComponentUI;