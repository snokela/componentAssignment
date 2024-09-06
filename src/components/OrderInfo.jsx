import '../styles/App.css';

function OrderInfo({ productName, productPrice, quantity }) {

  const sum = productPrice * quantity;

  return (
      <div>
        <table className="orderinfo-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{productName || ''}</td>
              <td>{quantity || ''}</td>
              <td>{sum != '' ? sum + '€' : ''}</td>
            </tr>
          </tbody>
        </table>
      </div>
  );
}

export default OrderInfo;