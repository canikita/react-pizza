import React from "react";
import { Link } from "react-router-dom";

import cartEmptyImg from "../assets/img/empty-cart.png";

export const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      Shopping cart is empty <span>😕</span>
    </h2>
    <p>
      You probably haven’t ordered any more pizza.
      <br />
      To order pizza, go to the main page.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Back</span>
    </Link>
  </div>
);
