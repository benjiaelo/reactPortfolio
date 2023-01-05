import React from "react";
import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { TfiInfo } from "react-icons/tfi";
import { SiBattledotnet } from "react-icons/si";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { RiChatVoiceFill } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setactiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setactiveNav("#")}
        className={activeNav === "#" ? "active" : ""}>
        {" "}
        <AiFillHome />
      </a>
      <a
        href="#about"
        onClick={() => setactiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}>
        {" "}
        <TfiInfo />
      </a>
      <a
        href="#experience"
        onClick={() => setactiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}>
        {" "}
        <SiBattledotnet />
      </a>
      <a
        href="#services"
        onClick={() => setactiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}>
        {" "}
        <MdOutlineMiscellaneousServices />
      </a>
      <a
        href="#contact"
        onClick={() => setactiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}>
        {" "}
        <RiContactsFill />
      </a>
      <a
        href="#testimonials"
        onClick={() => setactiveNav("#testimonials")}
        className={activeNav === "#testimonials" ? "active" : ""}>
        {" "}
        <RiChatVoiceFill />
      </a>
    </nav>
  );
};

export default Nav;
