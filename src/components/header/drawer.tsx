import React from "react";
import { Drawer } from "antd";
import "./styles.scss";
import { IoChevronForward } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const MainDrawer = (props: any) => {
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
          <div className="drawer-txt1">
            <div className="">About</div>
            <div className="">
              <IoChevronForward size={14} color="#000" />
            </div>
          </div>
          <div className="drawer-txt1">
            <div className="">Career</div>
            <div className="">
              <IoChevronForward size={14} color="#000" />
            </div>
          </div>
          <div className="drawer-txt1">
            <div className="">Projects</div>
            <div className="">
              <IoChevronForward size={14} color="#000" />
            </div>
          </div>
          <div className="drawer-txt1">
            <div className="">Contact</div>
            <div className="">
              <IoChevronForward size={14} color="#000" />
            </div>
          </div>
          <div className="drawer-txt1">
            <div className="">Resume</div>
            <div className="">
              <IoChevronForward size={14} color="#000" />
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MainDrawer;
