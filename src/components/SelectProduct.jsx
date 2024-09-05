import '../styles/App.css';

function SelectProduct() {

  // const products = [
  //   {id: 1, name: 'Smaak'},
  //   {id: 2, name: 'Royal Canin'},
  //   {id: 3, name: 'Orijen'},
  // ]

  return (
    <div className='content'>
      <div>
        <label>Product:</label>
        <div>
          <select >
            <option value="smaak">Smaak</option>
            <option value="">Royal Canin</option>
            <option value="">Orijen</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SelectProduct;