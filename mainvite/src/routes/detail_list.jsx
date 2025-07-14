import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detail_list.css";

export default function DetailList() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/movies/${id}/`)
      .then((res) => {
        if (!res.ok) throw new Error("영화 정보를 불러오지 못했습니다.");
        return res.json();
      })
      .then((data) => setMovie(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <div className="error">에러: {error}</div>;
  if (!movie) return <div className="loading">로딩 중...</div>;

  return (
    <div className="detail-container">
      <img
        src={movie.poster_url}
        alt={movie.title_kor}
        className="detail-poster"
      />
      <div className="detail-info">
        <h1 className="detail-title">
          {movie.title_kor} <span className="eng">({movie.title_eng})</span>
        </h1>
        <p><strong>장르:</strong> {movie.genre}</p>
        <p><strong>상영 시간:</strong> {movie.showtime}분</p>
        <p><strong>개봉일:</strong> {movie.release_date}</p>
        <p><strong>줄거리:</strong> {movie.plot}</p>
        <p><strong>평점:</strong> {movie.rating}</p>
        <div className="director">
          <h3>감독</h3>
          <img
            src={movie.director_image_url}
            alt={movie.director_name}
            className="director-image"
          />
          <p>{movie.director_name}</p>
        </div>
        <div className="actors">
          <h3>출연진</h3>
          {movie.actors.map((actor) => (
            <div key={actor.name} className="actor">
              <img
                src={actor.image_url}
                alt={actor.name}
                className="actor-image"
              />
              <p>{actor.name} ({actor.character})</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
