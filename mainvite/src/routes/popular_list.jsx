import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClickableBox from '../component/ClickableBox';
import './popular_list.css';

export default function PopularList() {
    const [popularMovies, setPopularMovies] = useState([]);
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        console.log('✅ API URL 확인:', apiUrl); // 콘솔에서 실제 주소 확인

        fetch(`${apiUrl}/movies/list/`)
            .then(async (res) => {
                if (!res.ok) {
                    const text = await res.text(); // JSON이 아닐 경우 대비
                    throw new Error(`❌ HTTP ${res.status} 에러\n응답 내용: ${text}`);
                }
                return res.json();
            })
            .then((data) => {
                const topMovies = data.slice(0, 3); // 필요한 만큼만 가져오기
                setPopularMovies(topMovies);
            })
            .catch((err) => console.error('🔥 인기 영화 불러오기 실패:', err));
    }, []);

    return (
        <section className="popular-list-section">
            <h2 className="popular-list-title">인기 영화</h2>
            <div className="popular-movies-container">
                {popularMovies.map((movie) => (
                    <ClickableBox
                        key={movie.id}
                        imageSrc={movie.poster_url}
                        to={`/detail_list/${movie.id}`}
                        title={movie.title_kor}
                    />
                ))}
            </div>
            <Link to="/all_list" className="see-all-button">
                See all &rarr;
            </Link>
        </section>
    );
}
