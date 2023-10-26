import React from "react";
import { useState } from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "98.css";
import "../Styles/styles.scss";
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
          <h1 className="display-4">
            <Link className="bannerStyle" to="/">
              Because We Could
            </Link>
          </h1>
        </div>

        {/* Navbar */}
        <div className="window-body navbarStyle">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav merchBtnStyle">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    <button className="btnStyle">
                      Home <span className="sr-only">(current)</span>
                    </button>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/shop">
                    <button className="btnStyle">
                      All <span className="sr-only">(current)</span>
                    </button>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/shop/hats">
                    <button className="btnStyle">Hats</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop/outerwear">
                    <button className="btnStyle">Outerwear</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop/t-shirts">
                    <button className="btnStyle">T-Shirts</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop/hoodies">
                    <button className="btnStyle">Hoodies</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop/sweatshirts">
                    <button className="btnStyle">Sweatshirts</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop/bottoms">
                    <button className="btnStyle">Bottoms</button>
                  </Link>
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
          <h1 className="display-4">
            <Link className="bannerStyle" to="/">
              Because We Could
            </Link>
          </h1>
        </div>

        {/* Navbar */}
        <div className="window-body navbarStyle">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav merchBtnStyle">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    <button className="btnStyle">
                      Home <span className="sr-only">(current)</span>
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tour">
                    <button className="btnStyle">Tour</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/videos">
                    <button className="btnStyle">Videos</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    <button className="btnStyle">Contact</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to= "/shop" href="/shop">
                    <button className="btnStyle">Shop</button>
                  </Link>
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
