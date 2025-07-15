import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClickableBox from '../component/ClickableBox';
import './popular_list.css';

export default function PopularList() {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        fetch('/movies/')
            .then(res => res.json())
            .then(data => {
                const topMovies = data.slice(0, 3);
                setPopularMovies(topMovies);
            })
            .catch(err => console.error('인기 영화 불러오기 실패:', err));
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
