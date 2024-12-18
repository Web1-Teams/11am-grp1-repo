import React from 'react';


const ShopSidebar = () => {
  return (
    <aside className="sidebar">
      <div className="container">
        <div className="tabs">
          <input type="radio" id="radio-1" name="tabs" />
          <label className="tab" htmlFor="radio-1">
            All
          </label>
          <input type="radio" id="radio-2" name="tabs" defaultChecked />
          <label className="tab" htmlFor="radio-2">
            Filter
          </label>
          <span className="glider"></span>
        </div>
        <div className="filter-category">
          <h3>Categories</h3>
          <div className="radio-input">
            <label className="label">
              <input
                type="radio"
                id="value-1"
                defaultChecked
                name="group-1"
                value="value-1"
              />
              <p className="text">Oil Paintings</p>
            </label>
            <label className="label">
              <input
                type="radio"
                id="value-2"
                name="group-1"
                value="value-2"
              />
              <p className="text">3D Art</p>
            </label>
            <label className="label">
              <input
                type="radio"
                id="value-3"
                name="group-1"
                value="value-3"
              />
              <p className="text">Sketch Art</p>
            </label>
            <label className="label">
              <input
                type="radio"
                id="value-4"
                name="group-1"
                value="value-4"
              />
              <p className="text">Graffiti</p>
            </label>
          </div>
        </div>
        <div id="price-range">
          <h3>Price Range</h3>
          <div className="radio-input">
            <label className="label">
              <input
                type="radio"
                id="value-1"
                defaultChecked
                name="group-2"
                value="value-1"
              />
              <p className="text">$0 - $100</p>
            </label>
            <label className="label">
              <input
                type="radio"
                id="value-2"
                name="group-2"
                value="value-2"
              />
              <p className="text">$100 - $500</p>
            </label>
            <label className="label">
              <input
                type="radio"
                id="value-3"
                name="group-2"
                value="value-3"
              />
              <p className="text">$500 - $1,000</p>
            </label>
            <label className="label">
              <input
                type="radio"
                id="value-4"
                name="group-2"
                value="value-4"
              />
              <p className="text">$1,000 - $5,000</p>
            </label>
          </div>
        </div>
      </div>
      <button className="clear">Clear Filters</button>
    </aside>
  );
};

export default ShopSidebar;
