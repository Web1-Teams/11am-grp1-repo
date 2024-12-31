

import "./styles/wishlistStyle.css";
const wishListItems = ({ wishlistItems, removeFromWishlist, addToCartFromWishlist }) =>{


const WishList = () => {
  return (
    <div className = "shop-styling wishlist-Class">
    <div className="wishlist-container">
      <section className="list-items">
  <h2>Items in my cart</h2>
  <table>
    <thead>
      <tr>
        <th className="item-img">Item</th>
        <th>Title</th>
        <th>Unit Price</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {wishlistItems.length > 0 ? (
      wishlistItems.map(item => (
      <tr key ={item.id}>
        <td className="item-img">
          <img src={item.img} alt={item.title} />
        </td>
        <td>{item.title}</td>
        <td> {item.price} </td>
        <td>
          <button className="remove" onClick ={(removeFromWishlist(item.id))}>REMOVE</button>
        </td>
        <td>
          <button className="add-to-cart" onClick ={(addToCartFromWishlist(item.id))}>ADD TO CART</button>
        </td>
      </tr>
      ))
    ) : (
      <tr>
          <td colSpan="5">No items in your wishlist.</td>
      </tr>
    )}
    </tbody>
  </table>
</section>
</div>
</div>

  );
};



};
export default  wishListItems;
