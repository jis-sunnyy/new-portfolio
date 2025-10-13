"use client";
import React from "react";
import "./styles.scss";
import Image from "next/image";
import Mouse from "../../../../assets/images/m2.gif";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";

const Section1 = () => {
  return (
    <div className="sec1-main-box">
      <div className="hero-content">
        <div className="hero-greeting">Hi, I&apos;m</div>
        <h1 className="hero-name">Jis Sunny</h1>
        <div className="hero-tagline">Full Stack Engineer</div>
        <p className="hero-description">
          I build elegant, scalable solutions that power businesses across the
          globe. From cloud architecture to AI integration—turning complex
          challenges into seamless digital experiences.
        </p>

        <div className="hero-social">
          <a
            href="https://github.com/jissunny"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <IoLogoGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jis-sunny-28241815a/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <IoLogoLinkedin />
          </a>
          <a href="mailto:jis.sunny@gmail.com" className="social-link">
            <IoMail />
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <Image src={Mouse} width={50} height={50} alt="Scroll down" />
      </div>
    </div>
  );
};

export default Section1;
