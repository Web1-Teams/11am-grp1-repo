import React from 'react';

const ShopSidebar = ({
  categoryFilter,
  setCategoryFilter,
  priceFilter,
  setPriceFilter,
  isFilterActive,
  handleAllTabClick,
  handleFilterTabClick
}) => {
  return (
    <aside className="sidebar shop-styling">
      <div className="container">
        <div className="tabs">
          <input
            type="radio"
            id="radio-1"
            name="tabs"
            onClick={handleAllTabClick}
            checked={!isFilterActive}
          />
          <label className="tab" htmlFor="radio-1">All</label>
          <input
            type="radio"
            id="radio-2"
            name="tabs"
            onClick={handleFilterTabClick}
            checked={isFilterActive}
          />
          <label className="tab" htmlFor="radio-2">Filter</label>
          <span className="glider"></span>
        </div>

        <div className={!isFilterActive ? 'filter-disabled' : ''}>
          <h3>Categories</h3>
          <div className="radio-input">
            <label className="label">
              <input
                type="radio"
                id="value-1"
                checked={categoryFilter === "Fonts"}
                onChange={() => setCategoryFilter("Fonts")}
                name="group-1"
                value="value-1"
                disabled={!isFilterActive}
              />
              <p className="text">Fonts</p>
            </label>
            <label className="label">
              <input
                type="radio"
                id="value-2"
                checked={categoryFilter === "3D Models"}
                onChange={() => setCategoryFilter("3D Models")}
                name="group-1"
                value="value-2"
                disabled={!isFilterActive}
              />
              <p className="text">3D Models</p>
            </label>
            <label className="label">
              <input
                type="radio"
                id="value-3"
                checked={categoryFilter === "Graphics"}
                onChange={() => setCategoryFilter("Graphics")}
                name="group-1"
                value="value-3"
                disabled={!isFilterActive}
              />
              <p className="text">Graphics</p>
            </label>
            <label className="label">
              <input
                type="radio"
                id="value-4"
                checked={categoryFilter === "Templates"}
                onChange={() => setCategoryFilter("Templates")}
                name="group-1"
                value="value-4"
                disabled={!isFilterActive}
              />
              <p className="text">Templates</p>
            </label>
            <label className="label">
              <input
                type="radio"
                id="value-5"
                checked={categoryFilter === "Textures"}
                onChange={() => setCategoryFilter("Textures")}
                name="group-1"
                value="value-5"
                disabled={!isFilterActive}
              />
              <p className="text">Textures</p>
            </label>
            <label className="label">
              <input
                type="radio"
                id="value-6"
                checked={categoryFilter === "Icons"}
                onChange={() => setCategoryFilter("Icons")}
                name="group-1"
                value="value-6"
                disabled={!isFilterActive}
              />
              <p className="text">Icons</p>
            </label>
          </div>
        </div>

        <div id="price-range" className={!isFilterActive ? 'filter-disabled' : ''}>
          <h3>Price Range</h3>
          <div className="radio-input">
            <label className="label">
              <input
                type="radio"
                id="value-1"
                checked={priceFilter === "$0 - $100"}
                onChange={() => setPriceFilter("$0 - $100")}
                name="group-2"
                value="value-1"
                disabled={!isFilterActive}
              />
              <p className="text">$0 - $100</p>
            </label>
            <label className="label">
              <input
                type="radio"
                id="value-2"
                checked={priceFilter === "$100 - $500"}
                onChange={() => setPriceFilter("$100 - $500")}
                name="group-2"
                value="value-2"
                disabled={!isFilterActive}
              />
              <p className="text">$100 - $500</p>
            </label>
            <label className="label">
              <input
                type="radio"
                id="value-3"
                checked={priceFilter === "$500 - $1,000"}
                onChange={() => setPriceFilter("$500 - $1,000")}
                name="group-2"
                value="value-3"
                disabled={!isFilterActive}
              />
              <p className="text">$500 - $1,000</p>
            </label>
            <label className="label">
              <input
                type="radio"
                id="value-4"
                checked={priceFilter === "$1,000 - $5,000"}
                onChange={() => setPriceFilter("$1,000 - $5,000")}
                name="group-2"
                value="value-4"
                disabled={!isFilterActive}
              />
              <p className="text">$1,000 - $5,000</p>
            </label>
          </div>
        </div>
      </div>

      <button
        className={!isFilterActive ? 'filter-disabled' : ''}
        onClick={() => { setCategoryFilter("All"); setPriceFilter("All"); }}
        disabled={!isFilterActive}
      >
        Clear Filters
      </button>
    </aside>
  );
};

export default ShopSidebar;
