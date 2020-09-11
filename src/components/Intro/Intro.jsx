import React from "react";
import "./_intro.scss";

import MobileLeft from "assets/images/bg-pattern-intro-left-mobile.svg";
import MobileRight from "assets/images/bg-pattern-intro-right-mobile.svg";
import MobileBg from "assets/images/image-intro-mobile.jpg";
import DesktopLeft from "assets/images/bg-pattern-intro-left-desktop.svg";
import DesktopRight from "assets/images/bg-pattern-intro-right-desktop.svg";
import DesktopBg from "assets/images/image-intro-desktop.jpg";

const Intro = () => (
  <section className="intro">
    <div className="intro__content">
      <div className="intro__line"></div>
      <h1 className="intro__heading heading">Humanizing your insurance.</h1>
      <p className="intro__text">
        Get your life insurance coverage easier and faster. We blend our
        expertise and technology to help you find the plan that’s right for you.
        Ensure you and your loved ones are protected.
      </p>
      <button className="intro__btn btn">View plans</button>
      <img
        src={MobileRight}
        alt="mobile bg-right"
        className="intro__mobile-bg intro__mobile-bg-right"
      />
      <img
        src={MobileLeft}
        alt="mobile bg-left"
        className="intro__mobile-bg intro__mobile-bg-left"
      />
    </div>
    <img
      alt="Intro Image"
      className="intro__img"
      srcset={`${MobileBg}  375w, ${DesktopBg} 540w `}
    />
    <img
      src={DesktopLeft}
      alt="Desktop intro left"
      className="intro__desktop-bg intro__desktop-bg-left"
    />
    <img
      src={DesktopRight}
      alt="Desktop intro right"
      className="intro__desktop-bg intro__desktop-bg-right"
    />
  </section>
);

export default Intro;
