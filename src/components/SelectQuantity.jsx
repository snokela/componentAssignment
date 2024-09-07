import '../styles/ComponentUI.css';

function SelectQuantity({ quantity, setQuantity }) {

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

export default SelectQuantity;