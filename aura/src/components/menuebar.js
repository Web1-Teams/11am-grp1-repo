const Menuebar = () => {
  return (
    <div className="NavContainer">
      <div className="menuebar">
        <ul className="nav_list">
          <li className="gal-icon">
            <a href="#">
              <i className="fa-regular fa-images"></i>
            </a>
          </li>
          <li className="store-icon">
            <a href="#">
              <i className="fa-solid fa-store"></i>
            </a>
          </li>
          <li className="mas-icon">
            <a href="#">
              <i className="fa-regular fa-comments"></i>
            </a>
          </li>
          <li className="about-icon">
            <a href="#">
              <i className="fa-solid fa-question"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default Menuebar;