import React from "react";
import "./about.css";
import me from "../../assets/me-a.jpg";
import { FaMedal } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { AiFillCode } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaMedal className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <HiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>85+ Clients Worldwide</small>
            </article>

            <article className="about__card">
              <AiFillCode className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>

          <p>
            An enthusiastic and dedicated professional with practical experience
            across major areas of Software development, Management,
            Administration, Information Technology as well as Web and Graphics.
            I am a responsible and ambitious person, and always develop a mature
            approach to any task I undertake. I can easily build relationships
            and very capable with working in a team as well as lead others to
            achieve objectives. I am also very versatile and a quick learner.{" "}
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
