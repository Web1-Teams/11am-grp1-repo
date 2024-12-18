
import CartItems from "../components/cartItems.js";
import Cartsummry from "../components/cartsummry.js";
import Secnavbar from "../components/secnavbar.js";
import "./styles/cart-style.css"

const Cart = () => {
  return (
    <div className="cart-container"> 
      <Secnavbar/>
      <CartItems />
      <Cartsummry />
    </div>
  );
}

export default Cart;
