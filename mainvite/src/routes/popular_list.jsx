import React from "react";
import ClickableBox from "../component/ClickableBox";
import PopularMovies from "../Home/PopularMovies";
import nice from "../assets/다운로드.jpeg"

export default function PopularList() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <ClickableBox
        imageSrc={nice}
        to="/signup"
        title="영화 이름"
      />
      <ClickableBox
        imageSrc="https://source.unsplash.com/300x200?google"
        to="/signup"
        title="영화 이름"
      />
      <ClickableBox 
        imageSrc=""
        to="/signup"
        title="영화 이름"
      />
    </div>
  );
}