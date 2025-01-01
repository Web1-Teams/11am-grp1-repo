import { Link } from "react-router-dom";

const Menuebar = () => {
  return (
    <div className="NavContainer">
      <div className="menuebar">
        <ul className="nav_list">
          <li className="gal-icon">
            <Link to ="/home">
              <i className="fa-regular fa-images"></i>
            </Link>
          </li>
          <li className="store-icon">
            <Link to="/shop">
              <i className="fa-solid fa-store"></i>
            </Link>
          </li>
          <li className="mas-icon">
            <Link to="/community">
              <i className="fa-regular fa-comments"></i>
            </Link>
          </li>
          <li className="about-icon">
            <Link to="/about">
              <i className="fa-solid fa-question"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default Menuebar;