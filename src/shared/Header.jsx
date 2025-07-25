import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const navItems = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-bold" : ""}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-primary font-bold" : ""}>
          About
        </NavLink>
      </li>
        
      <li>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-primary font-bold" : ""}>
          Contact
        </NavLink>
      </li>
     
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        {/* Dropdown for Mobile */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">CoffeeShop</NavLink>
      </div>

      {/* Desktop Nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>

      <div className="navbar-end">
         <NavLink to="/login" className="btn btn-outline btn-sm mr-2">Login</NavLink>
      </div>
    </div>
  );
};

export default Header;
