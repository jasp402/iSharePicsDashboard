import React from 'react';
import { NavLink } from 'react-router-dom';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const CategoryMenuContent = () => {
  return (
    <>
      <NavLink to="/storefront/categories" className="nav-link body-link px-0 py-2">
        <span className="align-middle">Biscuit</span> <span className="align-middle">(4)</span>
        <CsLineIcons icon="chevron-right" className="align-middle float-end mb-1" size="13" />
      </NavLink>
      <NavLink to="/storefront/categories" className="nav-link body-link px-0 py-2">
        <span className="align-middle">Bagels</span> <span className="align-middle">(6)</span>
        <CsLineIcons icon="chevron-right" className="align-middle float-end mb-1" size="13" />
      </NavLink>
      <NavLink to="/storefront/categories" className="nav-link body-link px-0 py-2">
        <span className="align-middle">Bun</span> <span className="align-middle">(4)</span>
        <CsLineIcons icon="chevron-right" className="align-middle float-end mb-1" size="13" />
      </NavLink>
      <NavLink to="/storefront/categories" className="nav-link body-link px-0 py-2">
        <span className="align-middle">Cornbread</span> <span className="align-middle">(2)</span>
        <CsLineIcons icon="chevron-right" className="align-middle float-end mb-1" size="13" />
      </NavLink>
      <NavLink to="/storefront/categories" className="nav-link body-link px-0 py-2">
        <span className="align-middle">Crispy Bread</span> <span className="align-middle">(5)</span>
        <CsLineIcons icon="chevron-right" className="align-middle float-end mb-1" size="13" />
      </NavLink>
      <NavLink to="/storefront/categories" className="nav-link body-link px-0 py-2">
        <span className="align-middle">Flatbread</span> <span className="align-middle">(2)</span>
        <CsLineIcons icon="chevron-right" className="align-middle float-end mb-1" size="13" />
      </NavLink>
      <NavLink to="/storefront/categories" className="nav-link body-link px-0 py-2">
        <span className="align-middle">Grissini</span> <span className="align-middle">(3)</span>
        <CsLineIcons icon="chevron-right" className="align-middle float-end mb-1" size="13" />
      </NavLink>
      <NavLink to="/storefront/categories" className="nav-link body-link px-0 py-2">
        <span className="align-middle">Muffin</span> <span className="align-middle">(5)</span>
        <CsLineIcons icon="chevron-right" className="align-middle float-end mb-1" size="13" />
      </NavLink>
      <NavLink to="/storefront/categories" className="nav-link body-link px-0 py-2">
        <span className="align-middle">Sourdough</span> <span className="align-middle">(6)</span>
        <CsLineIcons icon="chevron-right" className="align-middle float-end mb-1" size="13" />
      </NavLink>
      <NavLink to="/storefront/categories" className="nav-link body-link px-0 py-2">
        <span className="align-middle">Rye</span> <span className="align-middle">(4)</span>
        <CsLineIcons icon="chevron-right" className="align-middle float-end mb-1" size="13" />
      </NavLink>
      <NavLink to="/storefront/categories" className="nav-link body-link px-0 py-2">
        <span className="align-middle">Toast Bread</span> <span className="align-middle">(2)</span>
        <CsLineIcons icon="chevron-right" className="align-middle float-end mb-1" size="13" />
      </NavLink>
      <NavLink to="/storefront/categories" className="nav-link body-link px-0 py-2">
        <span className="align-middle">White Wheat</span> <span className="align-middle">(17)</span>
        <CsLineIcons icon="chevron-right" className="align-middle float-end mb-1" size="13" />
      </NavLink>
      <NavLink to="/storefront/categories" className="nav-link body-link px-0 py-2">
        <span className="align-middle">Whole Wheat</span> <span className="align-middle">(9)</span>
        <CsLineIcons icon="chevron-right" className="align-middle float-end mb-1" size="13" />
      </NavLink>
      <NavLink to="/storefront/categories" className="nav-link body-link px-0 py-2">
        <span className="align-middle">Yeast Bread</span> <span className="align-middle">(4)</span>
        <CsLineIcons icon="chevron-right" className="align-middle float-end mb-1" size="13" />
      </NavLink>
    </>
  );
};

export default CategoryMenuContent;
