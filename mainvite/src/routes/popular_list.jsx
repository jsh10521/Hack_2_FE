import React from "react";
import ClickableBox from "../component/ClickableBox";
import PopularMovies from "../Home/PopularMovies";
import nice from "../assets/다운로드.jpeg"

export default function PopularList() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <ClickableBox
        imageSrc={nice}
        to="/detail_list"
        title="영화 이름"
      />
      <ClickableBox
        imageSrc=""
        to="/(영화별 연결 링크)"
        title="영화 이름"
      />
      <ClickableBox 
        imageSrc=""
        to="/(영화별 연결 링크)"
        title="영화 이름"
      />
    </div>
  );
}