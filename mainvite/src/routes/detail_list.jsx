import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DetailList() {
  const { id } = useParams(); // URL의 /movies/:id 에서 id 추출
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://thehotpotato.store/movies/${id}/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("영화 정보를 불러오지 못했습니다.");
        }
        return res.json();
      })
      .then((data) => setMovie(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <div style={{ color: "red" }}>에러: {error}</div>;
  if (!movie) return <div>로딩 중입니다...</div>;

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>{movie.title}</h1>
      <img
        src={movie.poster_image}
        alt={movie.title}
        style={{ width: "300px", borderRadius: "10px" }}
      />
      <p style={{ marginTop: "20px" }}>{movie.description}</p>
      <p><strong>감독:</strong> {movie.director}</p>
      <p><strong>장르:</strong> {movie.genre}</p>
      <p><strong>개봉일:</strong> {movie.release_date}</p>
    </div>
  );
}
