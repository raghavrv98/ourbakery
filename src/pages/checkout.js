import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./navbar";
const Checkout = () => {
  const { state } = useLocation();

  console.log("Payload for checkout: ", state.liItems);

  return (
    <>
      <div className="container">
        <Navbar liItems={state.liItems} totalCount={state.totalCount} />
        <div className="checkout-page">Checkout Page</div>
        <div>Payload for checkout:</div>
        <br />
        <div className="payload-content">{JSON.stringify(state?.liItems)}</div>
      </div>
    </>
  );
};

export default Checkout;
