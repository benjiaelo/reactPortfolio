import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/benjamin-otoo-a48325147/">
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/benjiaelo/">
        <AiOutlineGithub />
      </a>
      <a href="https://app.netlify.com/teams/benjiaelo/overview?_ga=2.145269428.124991674.1670513211-1773004329.1670513211">
        <SiNetlify />
      </a>
    </div>
  );
};

export default HeaderSocials;
