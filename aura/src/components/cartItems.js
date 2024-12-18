const CartItems = () => {
    return (
      <section className="cart-items">
        <h2>Items in my cart</h2>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Final Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="AURA.png" alt="Levi's Jeans 501" />
              </td>
              <td>22€</td>
              <td>
                <button>-</button> 2 <button>+</button>
              </td>
              <td>44€</td>
              <td>
                <button className="remove">x</button>
              </td>
            </tr>
            <tr>
              <td>
                <img src="AURA.png" alt="Shirt" />
              </td>
              <td>16€</td>
              <td>
                <button>-</button> 3 <button>+</button>
              </td>
              <td>48€</td>
              <td>
                <button className="remove">x</button>
              </td>
            </tr>
            {/* Add other items similarly */}
          </tbody>
        </table>
      </section>
    );
  };
  
  export default CartItems;
  