import '../styles/App.css';

function SelectProduct({ products, productsPrice, selectedProductId, setSelectedProductId }) {

  //haetaan tuotteen hinta productsPrice-listasta id:tä hyödyntäen, jotta voidaan näyttää se dropdownissa tuotteen perässä
  const getPrice= (id) => {
    const productPrice = productsPrice.find(product => product.id === id);
    return productPrice ? productPrice.price : 'Ei hintaa';
  };

  return (
    <div className='content'>
      <div className='product-select-row'>
        <label className='product-select-label'>Select product:</label>
        <div>
          <select
            className='product-select'
            value={selectedProductId}
            onChange={(e) => setSelectedProductId(parseInt(e.target.value))}
          >
            {products.map(product => (
              <option key={product.id} value={product.id}>
                {product.name} - ({getPrice(product.id)} €)
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default SelectProduct;