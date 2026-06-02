"use client";
import React from "react";
import "./styles.scss";
import {
  IoChevronUp,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
} from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-brand">
              <h3>Jis Sunny</h3>
              <p>Full Stack Engineer</p>
            </div>
          </div>

          <div className="footer-center">
            <div className="footer-social">
              <a
                href="https://www.linkedin.com/in/jis-sunny-28241815a/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-link"
              >
                <IoLogoLinkedin className="footer-icon" size={24} />
              </a>

              <a
                href="https://github.com/jissunny"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-link"
              >
                <IoLogoGithub className="footer-icon" size={24} />
              </a>

              <a href="mailto:jis.sunny@gmail.com" className="footer-icon-link">
                <IoMail className="footer-icon" size={24} />
              </a>

              <a
                href="/Jis_Software_Engineer_CV.pdf"
                download="Jis_Sunny_Resume.pdf"
                className="footer-icon-link"
              >
                <IoMdDownload className="footer-icon" size={24} />
              </a>
            </div>
          </div>

          <div className="footer-right">
            <div
              className="footer-scroll-top"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              <IoChevronUp size={18} />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Jis Sunny. Built passion</p>
        </div>
      </div>
    </div>
  );
};
