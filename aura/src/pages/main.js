import Menuebar from "../components/menuebar"
import Navbar from "../components/shop-navbar"
import "./styles/menuebar.css"

const Main = () => {
    return (
        <div>
            <div className="shop-styling"><Navbar /></div>
            <Menuebar />
        </div>
    )
}

export default Main