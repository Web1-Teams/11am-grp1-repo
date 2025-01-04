

import "./styles/wishlistStyle.css";


const wishlist = ({ wishlistItems  , setWishlistItems ,  addToCartFromWishlist }) =>{
  const handleRemoveFromWishlist = (id) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div className = "shop-styling wishlist-Class">
    <div className="wishlist-container">
      <section className="list-items">
  <h2>Items in my cart</h2>
  {wishlistItems && wishlistItems.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Title</th>
              <th>Unit Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {wishlistItems.map(item => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt={item.title} className="modal-img" />
                </td>
                <td>{item.title}</td>
                <td>{item.price}€</td>
                <td>
                <button className="remove" onClick ={(handleRemoveFromWishlist(item.id))}>REMOVE</button>
                </td>
                <td>
                  <button className="add-to-cart" >ADD TO CART</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items in the wishlist</p>
      )}
    </section>
</div>
</div>

  );
};




export default  wishlist;
