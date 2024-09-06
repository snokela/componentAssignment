import '../styles/App.css';

function SelectQuantity() {
  return (
    <div className="content">
      <div className='quantity-select-row'>
        <p className='quantity-select-p'>Quantity:</p>
        <div className='button-row'>
          <button className='quantity-button'>-</button>
          <p>kpl</p>
          <button className='quantity-button'>+</button>
        </div>
      </div>
    </div>
  );
}

export default SelectQuantity;