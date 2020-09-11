import React from "react";
import "./_footer.scss";

import Logo from "assets/images/logo.svg";
import Facebook from "assets/images/icon-facebook.svg";
import Twitter from "assets/images/icon-twitter.svg";
import Pinterest from "assets/images/icon-pinterest.svg";
import Instagram from "assets/images/icon-instagram.svg";

const Footer = () => (
  <footer class="footer">
    <div class="footer__top">
      <img src={Logo} alt="Logo" class="footer__logo" />
      <div class="footer__sns-container">
        <img src={Facebook} alt="SNS Icon" class="footer__sns-icon" />
        <img src={Twitter} alt="SNS Icon" class="footer__sns-icon" />
        <img src={Pinterest} alt="SNS Icon" class="footer__sns-icon" />
        <img src={Instagram} alt="SNS Icon" class="footer__sns-icon" />
      </div>
    </div>
    <div class="footer__line"></div>
    <div class="footer__bottom">
      <ul class="footer__nav-list">
        <li class="footer__nav-item-heading">Our company</li>
        <li class="footer__nav-item">How we work</li>
        <li class="footer__nav-item">Why Insure?</li>
        <li class="footer__nav-item">Check Price</li>
        <li class="footer__nav-item">Reviews</li>
      </ul>

      <ul class="footer__nav-list">
        <li class="footer__nav-item-heading">Help me</li>
        <li class="footer__nav-item">FAQ</li>
        <li class="footer__nav-item">Terms of use</li>
        <li class="footer__nav-item">Privacy policy</li>
        <li class="footer__nav-item">Cookies</li>
      </ul>

      <ul class="footer__nav-list">
        <li class="footer__nav-item-heading">Contact</li>
        <li class="footer__nav-item">Sales</li>
        <li class="footer__nav-item">Support</li>
        <li class="footer__nav-item">Live chat</li>
      </ul>

      <ul class="footer__nav-list">
        <li class="footer__nav-item-heading">Other</li>
        <li class="footer__nav-item">Careers</li>
        <li class="footer__nav-item">Press</li>
        <li class="footer__nav-item">Licenses</li>
      </ul>
    </div>
  </footer>
);

export default Footer;
