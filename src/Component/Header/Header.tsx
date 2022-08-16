import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const NavBar = (
    <>
      <li>
        <div className="flex-none gap-2 ">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
        </div>
      </li>
      <li>
        <button className="btn bg-white text-black hover:bg-white hover:text-black h-3 ml-[15px] ">
          LogIn
        </button>
      </li>
      <li>
        <Link className="font-bold lg:text-white text-black h-14 ml-4" to="/">
          Become A Seller
        </Link>
      </li>
      <li>
        <Link to="/" className="font-bold lg:text-white text-black h-14 ml-4">
          More
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </Link>
        <ul className="p-2 bg-base-100">
          <li>
            <Link to="/">Submenu 1</Link>
          </li>
          <li>
            <Link to="/">Submenu 2</Link>
          </li>
        </ul>
      </li>
      <li>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <Link to="/" className="btn btn-primary btn-block">
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-primary h-[55px]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56"
            >
              {NavBar}
            </ul>
          </div>
          <Link to="/" className="normal-case text-xl lg:ml-[250px]">
            <div className="w-32 ">
              <img
                style={{ height: 25, width: 100 }}
                src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                alt="logo"
              />
              <div className="flex items-center">
                <span className="text-white text-xs">Explore Plus</span>
                <img
                  className="w-[10px], h-[10px] mt-1 ml-1"
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                  alt=""
                />
              </div>
            </div>
          </Link>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal items-center p-0">{NavBar}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
