import React from "react";
import { useNavigate } from "react-router-dom";

export default function SignupButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <button onClick={handleClick} className="signup-button">
      회원가입
    </button>
  );
}