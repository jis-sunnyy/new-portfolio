"use client";
import React from "react";
import "./styles.scss";
import { Col, Container, Row } from "react-bootstrap";
import { IoChevronUp } from "react-icons/io5";

export const Footer = () => {
  return (
    <div className="footer">
      <Container className="footer-box3">
        <div className="footer-box1">
          <Row>
            <Col md="2" sm="6" xs="12">
              <div className="footer-txt1">About</div>
            </Col>
          </Row>
          <Row>
            <Col md="2" sm="6" xs="12">
              <div className="footer-txt1">Career</div>
            </Col>
          </Row>
          <Row>
            <Col md="2" sm="6" xs="12">
              <div className="footer-txt1">Contact</div>
            </Col>
          </Row>
          <Row>
            <Col md="2" sm="6" xs="12">
              <div className="footer-txt1">Resume</div>
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
