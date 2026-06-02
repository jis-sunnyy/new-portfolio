import React from "react";
import { Drawer } from "antd";
import "./styles.scss";
import { IoChevronForward } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const MainDrawer = (props: any) => {
  const handleNavClick = (sectionId: string) => {
    props?.scrollToSection(sectionId);
    props?.close();
  };

  return (
    <div>
      <Drawer
        width={260}
        title=""
        onClose={() => props?.close()}
        open={props?.open}
        closeIcon={<IoClose size={25} color="#000" />}
      >
        <div className="drawer-list">
          <div className="drawer-txt1" onClick={() => handleNavClick("b")}>
            <div className="">About</div>
            <div className="">
              <IoChevronForward size={14} color="#000" />
            </div>
          </div>
          <div className="drawer-txt1" onClick={() => handleNavClick("c")}>
            <div className="">Career</div>
            <div className="">
              <IoChevronForward size={14} color="#000" />
            </div>
          </div>
          <div className="drawer-txt1" onClick={() => handleNavClick("d")}>
            <div className="">Projects</div>
            <div className="">
              <IoChevronForward size={14} color="#000" />
            </div>
          </div>
          <div className="drawer-txt1" onClick={() => handleNavClick("e")}>
            <div className="">Contact</div>
            <div className="">
              <IoChevronForward size={14} color="#000" />
            </div>
          </div>
          <a
            href="/Jis_Software_Engineer_CV.pdf"
            download="Jis_Sunny_Resume.pdf"
            className="drawer-txt1"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="">Resume</div>
            <div className="">
              <IoChevronForward size={14} color="#000" />
            </div>
          </a>
        </div>
      </Drawer>
    </div>
  );
};

export default MainDrawer;
