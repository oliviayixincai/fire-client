import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CTAButton from "../CTAButton/CTAButton";
import "./Header.scss";

const Header = ({ showButton = true }) => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <Link to="/">
        <h2>FIRE Calculator</h2>
      </Link>
      {showButton && (
        <div className="header__menu">
          <CTAButton
            onClick={() => navigate("/tips")}
            buttonText="FIRE TIPS"
          />
      </div>
      )}
    </header>
  );
};

export default Header;
