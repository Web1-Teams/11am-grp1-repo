const Cartsummry = () => {
  return (
    <div className="summary">
      <h3>Summary</h3>
      <p>
        Subtotal: <span>232$</span>
      </p>
      <p>
        Discount: <span>0$</span>
      </p>
      <div>
        <label htmlFor="gift-code">Enter gift code</label>
        <input type="text" id="gift-code" placeholder="Enter gift code" />
      </div>
      <p>
        Total Price: <span>266€</span>
      </p>
      <button className="checkout">Proceed to Checkout</button>
    </div>
  );
};

export default Cartsummry;