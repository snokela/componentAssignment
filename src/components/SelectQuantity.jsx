import '../styles/App.css';

function SelectQuantity({ quantity, setQuantity }) {



const handleClickAdded = () => {
  console.log("Added one")
  setQuantity(prevQuantity => prevQuantity + 1)
}

const handleClickReduce = () => {
  console.log("Reduced one")
  setQuantity(prevQuantity => prevQuantity - 1)
}

  return (
    <div className="content">
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
    </div>
  );
}

export default SelectQuantity;