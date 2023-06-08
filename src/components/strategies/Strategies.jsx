import React from "react";
import strategies1 from "../../assets/images/strategiesimg1.png";
import strategies2 from "../../assets/images/strategiesimg2.png";
import strategies3 from "../../assets/images/strategiesimg3.png";
import "./Strategies.scss";

const Strategies = () => {
  return (
    <section id="strategies">
      <div class="container">
        <div class="strategies">
          <div class="strategies-content">
            <h3>Contents Strategies</h3>
            <p>
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.{" "}
            </p>
          </div>
          <div class="strategies-rows">
            <div class="strategies-row">
              <img src={strategies1} alt="" />
              <div class="strategies__row-content">
                <p>
                  By <span>Wahid Ari |</span> 03 March 2019
                </p>
                <h4>Increasing Prosperity With Positive Thinking</h4>
              </div>
            </div>
            <div class="strategies-row">
              <img src={strategies2} alt="" />
              <div class="strategies__row-content">
                <p>
                  By <span>Wahid Ari |</span> 03 March 2019
                </p>
                <h4>Motivation Is The First Step To Success</h4>
              </div>
            </div>
            <div class="strategies-row">
              <img src={strategies3} alt="" />
              <div class="strategies__row-content">
                <p>
                  By <span>Wahid Ari |</span> 03 March 2019
                </p>
                <h4 class="cont">
                  Success Steps For Your Personal Or Business
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategies;
