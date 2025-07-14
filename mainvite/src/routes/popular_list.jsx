import React from "react";
import ClickableBox from "../component/ClickableBox";
import PopularMovies from "../Home/PopularMovies";

export default function PopularList() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <ClickableBox
        imageSrc=""
        to="/detail_list/1"
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