import Navbar from "../components/navbar";
import Footer from "../components/shop-footer";
import ShopItem from "../components/shop-item";
import ShopSidebar from "../components/shop-sidebar";
import "./styles/shop-style.css"


const Shop = () => {



  return (
    <div className="layout">
      <Navbar />
      <ShopSidebar />
      <main className="shop-items">
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Shop;
