import React from "react";
import "./footer.css";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        TekWaveinc
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://facebook.com/BenjiaeloTech/?_rdc=1&_rdr"
          target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com/TekWaveInc" target="_blank">
          <BsTwitter />
        </a>

        <a href="https://instagram.com/TekWaveInc" target="_blank">
          <AiFillInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Tekwave Inc.</small>
      </div>
    </footer>
  );
};

export default Footer;
