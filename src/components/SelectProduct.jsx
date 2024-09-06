import '../styles/App.css';

function SelectProduct({ productNames, productPrices, selectedIndex, setSelectedIndex }) {

  //haetaan tuotteen hinta productsPrice-listasta id:tä hyödyntäen, jotta voidaan näyttää se dropdownissa tuotteen perässä
  // const getPrice= (id) => {
  //   const productPrice = productsPrice.find(product => product.id === id);
  //   return productPrice ? productPrice.price : 'Ei hintaa';
  // };

  return (
    <div className='content'>
      <div className='product-select-row'>
        <label className='product-select-label'>Product:</label>
          <select
            className='product-select'
            value={selectedIndex}
            onChange={(e) => setSelectedIndex(parseInt(e.target.value))}
          >
            <option value=''>-- Select product --</option>
            {productNames.map((name, index )=> (
              <option key={index} value={index}>
                {name} - ({productPrices[index]} €)
              </option>
            ))}
          </select>
      </div>
    </div>
  );
}

export default SelectProduct;