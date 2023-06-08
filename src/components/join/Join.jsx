import React from "react";
import joinImg from "../../assets/images/joinimg.png";
import "./Join.scss"

const Join = () => {
  return (
    <section id="join">
      <div class="container">
        <div class="join-card">
          <div class="join__card-left">
            <h1>Join 100 Compannies who boost their business with Product</h1>
            <li href="#">Get This</li>
          </div>
          <div class="join__card-right">
            <img src={joinImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
