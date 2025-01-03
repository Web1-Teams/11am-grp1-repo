import CartItems from "../components/cartItems.js";
import Cartsummry from "../components/cartsummry.js";
import Navbar from "../components/navbar.js";
import "./styles/cart-style.css"
import "./styles/shop-item-style.css"

const Cart = ({ cartItems, setCartItems }) => {
  console.log("Cart Items in cart: ", cartItems);
  return (
<div className ="shop-styling">
    <div className="cart-class">
    <div className="cart-container">
    <div className="shop-styling"><Navbar IsWithSearch={false} /></div>
      <CartItems cartItems={cartItems} setCartItems={setCartItems} />
      <Cartsummry cartItems={cartItems} />
    </div>
    </div>
    </div>
  );
}

export default Cart;