"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";
import { CgMenuRight } from "react-icons/cg";
import MainDrawer from "./drawer";

export const Header = ({ scrollToSection, activeSection }: any) => {
  const [isDrawer, setIsDrawer] = useState(false);
  console.log(isDrawer);

  const [lastScrollY, setLastScrollY] = useState<any>(0);

  const handleNavigation = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      if (lastScrollY > window.scrollY) {
        setLastScrollY(false);
      } else if (lastScrollY + 5 < window.scrollY) {
        setLastScrollY(true);
      }
    },
    [lastScrollY]
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleNavigation);
      return () => {
        window.removeEventListener("scroll", handleNavigation);
      };
    }
    console.log("lastScrollY", lastScrollY);
  }, [handleNavigation, lastScrollY]);

  return (
    <>
      <div
        className={
          lastScrollY
            ? `header scrolled ${activeSection}`
            : `header ${activeSection}`
        }
      >
        <Container>
          <Row>
            <Col md="3"></Col>
            <Col md="6">
              <div className="header-box1">
                <div className="">
                  <div
                    className={`header-txt1 ${activeSection}`}
                    onClick={() => scrollToSection("b")}
                  >
                    About
                  </div>
                </div>
                <div className="">
                  <div
                    className={`header-txt1 ${activeSection}`}
                    onClick={() => scrollToSection("c")}
                  >
                    Career
                  </div>
                </div>
                <div className="">
                  <div
                    className={`header-txt1 ${activeSection}`}
                    onClick={() => scrollToSection("d")}
                  >
                    Projects
                  </div>
                </div>
                <div className="">
                  <div
                    className={`header-txt1 ${activeSection}`}
                    onClick={() => scrollToSection("e")}
                  >
                    Contact
                  </div>
                </div>
                <div className="">
                  <a
                    href="/Jis_Software_Engineer_CV.pdf"
                    download="Jis_Sunny_Resume.pdf"
                    className={`header-txt1 ${activeSection}`}
                  >
                    Resume
                  </a>
                </div>
              </div>
            </Col>
            <Col md="3"></Col>
          </Row>
        </Container>
      </div>

      <div className={`drawer-item ${activeSection}`}>
        <div className="header-txt2"></div>
        <div className="" onClick={() => setIsDrawer(true)}>
          <CgMenuRight size={22} color="#fff" />
        </div>
      </div>

      {isDrawer ? (
        <MainDrawer
          open={isDrawer}
          close={() => setIsDrawer(false)}
          scrollToSection={scrollToSection}
        />
      ) : null}
    </>
  );
};
