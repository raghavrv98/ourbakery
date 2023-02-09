import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../App.css";

const Navbar = (props) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [newState, setnewState] = useState(props);

  useEffect(() => {
    if (props?.totalCount >= 0) {
      setnewState(props);
    } else if (state?.totalCount > 0) {
      setnewState(state);
    } else if (props?.totalCount !== state?.totalCount) {
      setnewState(props);
    }
  });

  const routeChange = (id) => {
    let path;
    if (id === "checkout") {
      path = "/checkout";
    } else if (id === "home") {
      path = "/";
    }
    navigate(path, {
      state: { liItems: newState.liItems, totalCount: newState.totalCount },
    });
  };

  return (
    <>
      <div>
        <div className="nav-bar">
          <div className="row">
            <p className="logo">Our Bakery</p>
            {window.location.pathname === "/checkout" && (
              <div className="home-btn" onClick={() => routeChange("home")}>
                Home
              </div>
            )}
            {newState.totalCount > 0 && window.location.pathname === "/" && (
              <div
                className="checkout-btn"
                onClick={() => routeChange("checkout")}
              >
                Checkout
                <span className="checkout-icon">{newState.totalCount}</span>
              </div>
            )}
          </div>
        </div>
        <div className="nav-box">
          <div className="row">
            <div className="col">
              <div className="mid-box">
                <img
                  alt="Products"
                  className="img-nav"
                  src={require("../images/products.png")}
                />
                <div className="nav-data">
                  <p className="nav-heading">Products</p>
                  <p className="nav-desc">
                    Our Bakery have a beautiful and delicious cakes and
                    pastries.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="mid-box">
                <img
                  alt="Products"
                  className="img-nav"
                  src={require("../images/cakeClass.png")}
                />
                <div className="nav-data">
                  <p className="nav-heading">Cake Class</p>
                  <p className="nav-desc">
                    We also teach how to make perfect bakery items.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="mid-box">
                <img
                  alt="Products"
                  className="img-nav"
                  src={require("../images/recipes.png")}
                />
                <div className="nav-data">
                  <p className="nav-heading">Recipes</p>
                  <p className="nav-desc">
                    Enroll our classes and get our secret recipes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
