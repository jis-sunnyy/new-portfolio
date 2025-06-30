"use client";
import React from "react";
import "./styles.scss";
import { Col, Container, Row } from "react-bootstrap";
import { IoChevronUp } from "react-icons/io5";
import { TbDownload } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";

export const Footer = () => {
  return (
    <div className="footer">
      <Container className="footer-box3">
        <div className="footer-box1">
          <Row>
            <Col md="2" sm="6" xs="12">
              <FaLinkedin className="footer-icon" size={25} />
            </Col>
          </Row>

          <Row>
            <Col md="2" sm="6" xs="12">
              <FaInstagram className="footer-icon" size={25} />
            </Col>
          </Row>

          <Row>
            <Col md="2" sm="6" xs="12">
              <IoMail className="footer-icon" size={25} />
            </Col>
          </Row>
          <Row>
            <Col md="2" sm="6" xs="12">
              <IoMdDownload className="footer-icon" size={25} />
            </Col>
          </Row>
        </div>
        <div
          className="footer-box2"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <IoChevronUp color="#d3f350" size={18} />
        </div>
      </Container>
    </div>
  );
};
