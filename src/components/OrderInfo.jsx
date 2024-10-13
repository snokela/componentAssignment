import '../styles/ComponentUI.css';

function OrderInfo({ productName, productPrice, quantity }) {

  const sum = productPrice && quantity ? productPrice * quantity : '';

  return (
      <div>
        <h3>Order info</h3>
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
              <td>{(productName && quantity > 0) ? productName : ''}</td>
              <td>{(quantity > 0 && productName) ? quantity : ''}</td>
              <td>{sum} €</td>
            </tr>
          </tbody>
        </table>
      </div>
  );
}

export default OrderInfo;