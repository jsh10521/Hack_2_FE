import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detail_list.css";

export default function DetailList() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://thehotpotato.store/movies/${id}/`)
      .then((res) => {
        if (!res.ok) throw new Error("영화 정보를 불러오지 못했습니다.");
        return res.json();
      })
      .then((data) => setMovie(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <div className="error">에러: {error}</div>;

  return (
    <div className="detail-container">
      <img
        src={movie.image_url}
        alt={movie.title_kor}
        className="detail-poster"
      />
      <div className="detail-info">
        <h1 className="detail-title">
          {movie.title_kor} <span className="eng">({movie.title_eng})</span>
        </h1>
        <p className="detail-description">{movie.description}</p>
        <p><strong>이름:</strong> {movie.name}</p>
        <p><strong>캐릭터:</strong> {movie.character}</p>
      </div>
    </div>
  );
}