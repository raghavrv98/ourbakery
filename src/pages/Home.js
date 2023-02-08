import React from "react";
import { useState } from "react";
import "../App.css";

const Home = () => {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="outer-container">
        <div className="container">
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
                      kjbwekfjbwefkjbwfkj lkjewbrfl jewbf lewl befl ewlf bewlj
                      fl
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
                      kjbwekfjbwefkjbwfkj lkjewbrfl jewbf lewl befl ewlf bewlj
                      fl
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
                      kjbwekfjbwefkjbwfkj lkjewbrfl jewbf lewl befl ewlf bewlj
                      fl
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="list-items">
            <p className="new-products-heading">NEW PRODUCTS</p>
            <hr />
            <img alt="hr-icon" className="hr-icon" src={require("../images/hrIcon.png")} />
            <div className="row">
              <div className="col">
                <div className="li-box">
                  <img
                    className="li-img"
                    alt="li-img"
                    src={require("../images/li1.png")}
                  />
                  <p className="li-desc">Muffin</p>
                  <p className="li-price">Rs. 50</p>
                  <div className="li-cart">Add to Cart</div>
                </div>
              </div>
              <div className="col">
                <div className="li-box">
                  <img
                    className="li-img"
                    alt="li-img"
                    src={require("../images/li2.png")}
                  />
                  <p className="li-desc">Choclate</p>
                  <p className="li-price">Rs. 120</p>
                  <div className="li-cart">Add to Cart</div>
                </div>
              </div>
              <div className="col">
                <div className="li-box">
                  <img
                    className="li-img"
                    alt="li-img"
                    src={require("../images/li3.png")}
                  />
                  <p className="li-desc">Choclate Moose</p>
                  <p className="li-price">Rs. 150</p>
                  <div className="li-cart">Add to Cart</div>
                </div>
              </div>
              <div className="col">
                <div className="li-box">
                  <img
                    className="li-img"
                    alt="li-img"
                    src={require("../images/li4.png")}
                  />
                  <p className="li-desc">Black Forest</p>
                  <p className="li-price">Rs. 100</p>
                  <div className="li-cart">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
