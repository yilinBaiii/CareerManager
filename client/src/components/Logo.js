import React from "react";
import walkerLogo from "../images/WalkerLogo.png";
import CM_Text from "../images/CM_Text.png";
import Wrapper from "../wrappers/Logo";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <a href="/landing">
        <div className="logo">
          <img src={walkerLogo} alt="walkerLogo"></img>
          <img src={CM_Text} alt="CM_Text"></img>
        </div>
      </a>
    </Wrapper>
  );
};

export default Logo;
