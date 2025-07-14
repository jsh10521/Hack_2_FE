import React, { useEffect, useState } from "react";
import ClickableBox from "../component/ClickableBox";

export default function PopularList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // 원하는 영화 ID 목록
    const movieIds = [1, 2, 3];

    Promise.all(
      movieIds.map((id) =>
        fetch(`/movies/${id}/`)
          .then((res) => {
            if (!res.ok) throw new Error("영화 정보를 불러오지 못했습니다.");
            return res.json();
          })
          .then((data) => ({ ...data, id }))
      )
    )
      .then((results) => setMovies(results))
      .catch((err) => console.error(err));
  }, []);

  if (movies.length === 0) return <div>로딩 중...</div>;

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {movies.map((movie) => (
        <ClickableBox
          key={movie.id}
          imageSrc={movie.poster_url}
          to={`/detail_list/${movie.id}`}
        />
      ))}
    </div>
  );
}
