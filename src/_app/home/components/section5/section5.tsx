"use client";
import React from "react";
import "./styles.scss";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
  IoLocationSharp,
} from "react-icons/io5";

const Section5 = () => {
  return (
    <div className="sec5-main-box">
      <div className="sec5-container">
        <div className="common-txt1">Let&apos;s Connect</div>
        <hr />

        <div className="contact-intro">
          <p>
            I&apos;m always interested in hearing about new projects,
            opportunities, or just having a chat about technology. Feel free to
            reach out!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-grid">
            <a
              href="mailto:jis.sunny@gmail.com"
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon">
                <IoMail />
              </div>
              <h3>Email</h3>
              <p>jis.sunny@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/jis-sunny-28241815a/"
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon">
                <IoLogoLinkedin />
              </div>
              <h3>LinkedIn</h3>
              <p>Connect with me</p>
            </a>

            <a
              href="https://github.com/jissunny"
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon">
                <IoLogoGithub />
              </div>
              <h3>GitHub</h3>
              <p>Check out my work</p>
            </a>

            <div className="contact-card">
              <div className="contact-icon">
                <IoLocationSharp />
              </div>
              <h3>Location</h3>
              <p>Calicut, Kerala, India</p>
            </div>
          </div>

          <div className="contact-cta">
            <h2>Ready to work together?</h2>
            <p>
              Whether you have a project in mind or just want to discuss
              technology, I&apos;d love to hear from you.
            </p>
            <a href="mailto:jis.sunny@gmail.com" className="cta-button">
              <IoMail />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
