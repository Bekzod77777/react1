import React from "react";
import headerIcon1 from "../../assets/images/header-icon1.svg";
import headerIcon2 from "../../assets/images/header-icon2.svg";
import headerIcon3 from "../../assets/images/header-icon3.svg";
import headerIcon4 from "../../assets/images/header-icon4.svg";
import "./Product.scss";

const Product = () => {
  return (
    <section id="header-bottom">
      <div class="container">
        <div class="header-bottom">
          <div class="header__bottom-content">
            <h1>Product was Built Specifically for You</h1>
          </div>
          <div class="header__bottom-rows">
            <div class="header__bottom-row">
              <img src={headerIcon1} alt="" />
              <h3>First click tests</h3>
              <p>While most people enjoy casino gambling,</p>
            </div>
            <div class="header__bottom-row">
              <img src={headerIcon2} alt="" />
              <h3>Design surveys</h3>
              <p>Sports betting, lottery and bingo playing for the fun</p>
            </div>
            <div class="header__bottom-row">
              <img src={headerIcon3} alt="" />
              <h3>Preference tests</h3>
              <p>The Myspace page defines the individual.</p>
            </div>
            <div class="header__bottom-row">
              <img src={headerIcon4} alt="" />
              <h3>Five second tests</h3>
              <p>Personal choices and the overall personality of the person.</p>
            </div>
          </div>
          <div class="header__bottom-btn">
            <li>SIGN UP NOW</li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
