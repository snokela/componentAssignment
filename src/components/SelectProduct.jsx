import '../styles/App.css';

function SelectProduct() {

  const products = [
    { id: 1, name: 'Smaak' },
    { id: 2, name: 'Royal Canin' },
    { id: 3, name: 'Orijen' },
  ]

  return (
    <div className='content'>
      <div>
        <label>Product:</label>
        <div>
          <select >
            {
              products.map((product) => <option key={product.id} value={product.id}>{product.name}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}

export default SelectProduct;