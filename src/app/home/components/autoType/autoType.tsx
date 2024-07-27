import React from "react";
import { TypeAnimation } from "react-type-animation";

const AutoType = () => {
  return (
    <div>
      <div>
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            500,
            "I am a Full Stack Devel0per", // initially rendered starting point
            1000,
            "I am a Software Engineer",
            1000,
            "I am a DevOps Engineer",
            1000,
            "I am a Senior Tech Lead",
            500,
          ]}
          speed={50}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default AutoType;
