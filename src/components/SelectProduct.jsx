import '../styles/ComponentUI.css';

function SelectProduct({ productNames, productPrices, selectedIndex, setSelectedIndex }) {

  return (
    <div>
      <h3>Select Product</h3>
      <label className='product-select-label'>Product:</label>
      <select
        className='product-select'
        value={selectedIndex}
        onChange={(e) => setSelectedIndex(parseInt(e.target.value))}
      >
        <option value={-1}>-- Select product --</option>
        {productNames.map((name, index) => (
          <option key={index} value={index}>
            {name} - ({productPrices[index]} €)
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectProduct;