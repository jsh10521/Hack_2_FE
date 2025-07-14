import React from "react";
import { useNavigate } from "react-router-dom";
import "./ClickableBox.css"


export default function ClickableBox({ imageSrc, to, title }) {
  const navigate = useNavigate();

  const isExternal = to?.startsWith("http");

  const handleClick = () => {
    if (!to) return;
    if (isExternal) {
      window.open(to, "_blank"); // 외부 링크 새 탭 열기
    } else {
      navigate(to); // 내부 경로는 React Router로 이동
    }
  };

  return (
    <div className="pop_box" onClick={handleClick}>
      <img src={imageSrc} alt={title} className="pop_image" />
      <div className="pop_title">{title}</div>
    </div>
  );
}