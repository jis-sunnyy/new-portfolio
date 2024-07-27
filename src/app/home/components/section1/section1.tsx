"use client";
import React from "react";
import "./styles.scss";
import Image from "next/image";
import Mouse from "../../../../assets/images/m2.gif";
import AutoType from "../autoType/autoType";

const Section1 = () => {
  return (
    <div className="sec1-main-box">
      <div
        className=""
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className="sec1-txt1">Jis Sunny</div>
        {/* <AutoType /> */}
        <div className="sec1-txt2">{`I'm a Software Engineer`}</div>
      </div>

      <div className="" style={{ paddingBottom: "20px" }}>
        <Image
          style={{ cursor: "pointer" }}
          src={Mouse}
          width={50}
          height={50}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default Section1;
