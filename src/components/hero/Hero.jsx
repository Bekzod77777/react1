import React from "react";
import play from "../../assets/images/play.svg";
import homeImg from "../../assets/images/home-leftimg.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <section id="home">
      <div class="container">
        <div class="home">
          <div class="home-left">
            <h1>Work at the speed of thought</h1>
            <p>
              Tools, tutorials, design and innovation experts, all in one place!
              The most intuitive way to imagine your next user experience.
            </p>
            <div class="home__left-btns">
              <li class="home-leftbtn" href="#">
                Get started
              </li>
              <div class="home__btns-watch">
                <img src={play} alt="" />
                <li href="#">Watch the Video</li>
              </div>
            </div>
          </div>
          <div class="home-right">
            <img src={homeImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
