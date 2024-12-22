import CartItems from "../components/cartItems.js";
import Cartsummry from "../components/cartsummry.js";
import Secnavbar from "../components/secnavbar.js";
import "./styles/cart-style.css"

const Cart = ({ cartItems, setCartItems }) => {
  console.log("Cart Items in cart: ", cartItems);
  return (
    <div className="cart-container">
      <Secnavbar />
      <CartItems cartItems={cartItems} setCartItems={setCartItems} />
      <Cartsummry cartItems={cartItems} />
    </div>
  );
}

export default Cart;