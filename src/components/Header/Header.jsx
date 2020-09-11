import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./_header.scss";

import MobileNav from "./MobileNav.jsx";

import Logo from "assets/images/logo.svg";
import Burger from "assets/images/icon-hamburger.svg";
import Close from "assets/images/icon-close.svg";

const Header = () => {
  const [navVisible, setNavVisible] = useState(false);
  const close = (
    <label for="check-nav" class="nav__mobile close">
      <img
        src={Close}
        alt="Close Icon"
        onClick={() => setNavVisible(!navVisible)}
      />
    </label>
  );

  const burger = (
    <label for="check-nav" class="nav__mobile open">
      <img
        src={Burger}
        alt="Burger Icon"
        onClick={() => setNavVisible(!navVisible)}
      />
    </label>
  );
  return (
    <>
      <header className={`nav ${!navVisible ? "" : "nav-fixed"}`}>
        <nav className="nav__content">
          <img src={Logo} alt="Logo" className="nav__logo" />
          <ul className="nav__list">
            <li className="nav__list-item">How we work</li>
            <li className="nav__list-item">Blog</li>
            <li className="nav__list-item">Account</li>
            <li className="nav__list-item">View Plans</li>
          </ul>
          {navVisible ? close : burger}
          <CSSTransition
            in={navVisible}
            timeout={150}
            classNames="navAnimation"
            unmountOnExit
          >
            <MobileNav />
          </CSSTransition>
        </nav>
      </header>
    </>
  );
};

export default Header;
