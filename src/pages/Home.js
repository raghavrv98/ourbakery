import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import "../App.css";
import { data } from "./data";
import Navbar from "./navbar";

const Home = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [liItems, setLiItems] = useState(data);
  const [totalCount, setTotalCount] = useState(0);

  // function for adding and subtracting product counts
  const addItemsHandler = (count, index) => {
    if (count > 5) return null;
    const liItemsArr = [...liItems];
    liItemsArr[index].count = count;
    setLiItems(liItemsArr);
    totalCountHandler();
  };

  //function to add total count
  const totalCountHandler = () => {
    const liItemsArr = [...liItems];
    liItemsArr?.reduce((acc, val) => {
      acc = acc + val.count;
      setTotalCount(acc);
      return acc;
    }, 0);
    window.history.replaceState({}, document.title);
  };

  //function to separate payload for checkout
  const checkoutObject = () => {
    const liItemsArr = [...liItems];
    const filteredArr = liItemsArr.filter((val) => val.count !== 0);
    return filteredArr;
  };

  useEffect(() => {
    if (state !== null) {
      const liItemsArr = [...liItems];

      liItemsArr.forEach((element) => {
        const count = state?.liItems?.find(
          (val) => val.id === element.id
        )?.count;
        if (count) {
          element["count"] = count;
        } else {
          element["count"] = 0;
        }
      });

      setLiItems(liItemsArr);
      totalCountHandler();
    }
  }, [state?.liItems]);

  return (
    <>
      <div className="outer-container">
        <div className="container">
          <Navbar liItems={checkoutObject()} totalCount={totalCount} />
          <div className="list-items">
            <p className="new-products-heading">NEW PRODUCTS</p>
            <hr />
            <img
              alt="hr-icon"
              className="hr-icon"
              src={require("../images/hrIcon.png")}
            />
            <div className="row">
              {liItems.map((val, index) => (
                <div key={val.id} className="col">
                  <div className="li-box">
                    <img
                      className="li-img"
                      alt="li-img"
                      src={require(`../images/${val.imgUrl}`)}
                    />
                    <p className="li-desc">{val.DisplayName}</p>
                    <p className="li-price">Rs. {val.price}</p>
                    {val.count === 5 && (
                      <span className="max-err-count-msg">
                        You can only select 5 products at a time
                      </span>
                    )}
                    {val.count > 0 ? (
                      <div>
                        <div
                          className="sub-btn"
                          onClick={() => addItemsHandler(val.count - 1, index)}
                        >
                          -
                        </div>
                        <div className="li-cart">
                          <span className="count">{val.count}</span>
                        </div>
                        <div
                          className="add-btn"
                          onClick={() => addItemsHandler(val.count + 1, index)}
                        >
                          +
                        </div>
                      </div>
                    ) : (
                      <div
                        className="li-cart"
                        onClick={() => addItemsHandler(val.count + 1, index)}
                      >
                        <span className="add-cart-text">Add to Cart</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {totalCount > 0 && (
            <div
              onClick={() =>
                navigate("/checkout", {
                  state: { liItems: checkoutObject(), totalCount },
                })
              }
              className="proceed-to-buy"
            >
              Buy
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
