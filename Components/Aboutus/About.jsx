import React from "react";
import "./About.css";
import { FaRegHandshake } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const About = () => {
  return (
    <section id="About">
      <div className="about__text">
        <h2>About Us</h2>
        <div className="con">
        This project underscores my ability to blend technical expertise with educational insights to create impactful digital learning resources. It showcases my proficiency in web development, collaborative skills, and dedication to education's transformative power.{" "}
          <b>
            <i>
              <font color="#00FFFF">"Academia"</font>
            </i>
          </b>{" "}
          provides key links(resources) to study materials available online.
        </div>
      </div>
      <div className="portfolio__container">
        <div className="portfolio_img"></div>
        <div className="portfolio_img"></div>
      </div>
    </section>
  );
};

export default About;
