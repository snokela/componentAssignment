// import SelectProduct from "./SelectProduct";
// import SelectQuantity from "./SelectQuantity";
import '../styles/ComponentUI.css';

const ProductForm = ({
  productNames,
  productPrices,
  selectedIndex,
  setSelectedIndex,
  quantity,
  setQuantity
}) => {
  return (
    <>
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
    </>
  );
}

export default ProductForm;

// function for product selection
const SelectProduct = ({ productNames, productPrices, selectedIndex, setSelectedIndex }) => {

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

// function for quantity selection
const SelectQuantity = ({ quantity, setQuantity })  => {

  const handleClickAdded = () => {
    setQuantity(prevQuantity => prevQuantity + 1)
  }

  const handleClickReduce = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1)
    }
  }

  return (
      <div className='quantity-select-row'>
        <p className='quantity-select-p'>Quantity:</p>
        <div className='button-row'>
          <button
            onClick={handleClickReduce}
            className='quantity-button'
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            onClick={handleClickAdded}
            className='quantity-button'
          >
            +
          </button>
        </div>
      </div>
  );
}