import React from "react";
import { useState } from "react";
import Cart from "./Cart";
// import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "98.css";
import "../Styles/styles.css";
import { useSelector } from "react-redux";

function Header() {
  const [open, setOpen] = useState(false);
  const items = useSelector((state) => state.cart.items);

  const [shop, setShop] = useState(false);
  const currentUrl = window.location.href;
  const urlArr = currentUrl.split("/");

  if (urlArr.includes("item") || urlArr.includes("shop")) {
    return (
      <header className="jumbotron headerStyle">
        <div className="container text-white">
          <h1 className="display-4 text-center">
            <a className="bannerStyle" href="/">
              Because We Could
            </a>
          </h1>
        </div>

        {/* Navbar */}
        <div className="window-body navbarStyle">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav merchBtnStyle">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    <button className="btnStyle">
                      Home <span className="sr-only">(current)</span>
                    </button>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/shop">
                    <button className="btnStyle">
                      All <span className="sr-only">(current)</span>
                    </button>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/shop/music">
                    <button className="btnStyle">
                      Music <span className="sr-only">(current)</span>
                    </button>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/shop/hats">
                    <button className="btnStyle">Hats</button>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/shop/outerwear">
                    <button className="btnStyle">Outerwear</button>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/shop/t-shirts">
                    <button className="btnStyle">T-Shirts</button>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/shop/hoodies">
                    <button className="btnStyle">Hoodies</button>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/shop/sweatshirts">
                    <button className="btnStyle">Sweatshirts</button>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/shop/bottoms">
                    <button className="btnStyle">Bottoms</button>
                  </a>
                </li>
                <div>
                  <li className="nav-item cartBtn">
                    <a className="nav-link" onClick={() => setOpen(!open)}>
                      <ShoppingCart size={35} />
                    </a>
                    {items.length > 0 ? (
                      <span className="cartAmount">{items.length}</span>
                    ) : null}
                  </li>
                </div>
              </ul>
            </div>
          </nav>
        </div>
        {open && <Cart />}
      </header>
    );
  } else {
    return (
      // Header
      <header className="jumbotron headerStyle">
        <div className="container text-white">
          <h1 className="display-4 text-center">
            <a className="bannerStyle" href="/">
              Because We Could
            </a>
          </h1>
        </div>

        {/* Navbar */}
        <div className="window-body navbarStyle">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav merchBtnStyle">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    <button className="btnStyle">
                      Home <span className="sr-only">(current)</span>
                    </button>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/tour">
                    <button className="btnStyle">Tour</button>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/videos">
                    <button className="btnStyle">Videos</button>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    <button className="btnStyle">Contact</button>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/shop">
                    <button className="btnStyle">Shop</button>
                  </a>
                </li>
                <div>
                  <li className="nav-item cartBtn">
                    <a className="nav-link" onClick={() => setOpen(!open)}>
                      <ShoppingCart size={35} />
                    </a>
                    {items.length > 0 ? (
                      <span className="cartAmount">{items.length}</span>
                    ) : null}
                  </li>
                </div>
              </ul>
            </div>
          </nav>
        </div>
        {open && <Cart />}
      </header>
    );
  }
}

export default Header;
