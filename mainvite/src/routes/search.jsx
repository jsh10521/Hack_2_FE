import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // 영화 전체 목록 가져오기
  useEffect(() => {
    fetch("/movies/")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("영화 데이터를 가져오는데 실패했습니다:", err);
        setIsLoading(false);
      });
  }, []);

  // 검색 필터
  const filteredMovies = movies.filter((movie) => {
    const term = searchTerm.toLowerCase();
    return (
      movie.title_kor.toLowerCase().includes(term) ||
      movie.title_eng.toLowerCase().includes(term)
    );
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Noto Sans KR, sans-serif" }}>
      {isLoading ? (
        <p>로딩 중...</p>
      ) : (
        <>
          <input
            type="text"
            placeholder="영화 제목 검색"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />

          <ul style={{ listStyle: "none", padding: 0 }}>
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <li
                  key={movie.id}
                  onClick={() => navigate(`/detail_list/${movie.id}`)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "16px",
                    cursor: "pointer",
                    backgroundColor: "#f7faff",
                    padding: "12px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    transition: "background-color 0.2s",
                  }}
                >
                  <img
                    src={movie.poster_url}
                    alt={movie.title_eng}
                    width="60"
                    style={{
                      marginRight: "16px",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <strong style={{ fontSize: "18px" }}>{movie.title_kor}</strong>
                    <br />
                    <em style={{ color: "#666" }}>{movie.title_eng}</em>
                  </div>
                </li>
              ))
            ) : (
              <li style={{ color: "#999" }}>검색 결과가 없습니다.</li>
            )}
          </ul>
        </>
      )}
    </div>
  );
}
