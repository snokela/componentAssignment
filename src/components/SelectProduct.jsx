import '../styles/App.css';

function SelectProduct({ products, productsPrice }) {

  // const products = [
  //   { id: 1, name: 'Smaak' },
  //   { id: 2, name: 'Royal Canin' },
  //   { id: 3, name: 'Orijen' },
  // ]

  // const productsPrice = [
  //   { id: 1, price: '42' },
  //   { id: 2, price: '51' },
  //   { id: 3, price: '48' },
  // ]

  //haetaan tuotteen hinta, jotta voidaan näyttää se dropdownissa tuotteen perässä
  const getPrice= (id) => {
    const productPrice = productsPrice.find(product => product.id === id);
    return productPrice ? productPrice.price : 'Ei hintaa';
  };

  return (
    <div className='content'>
      <div className='product-select-row'>
        <label className='product-select-label'>Select product:</label>
        <div>
          <select className='product-select'>
            {
              products.map((product) => <option key={product.id} value={product.id}>{product.name} - ({getPrice(product.id)} €) </option>)}
          </select>
        </div>
      </div>
    </div>
  );
}

export default SelectProduct;