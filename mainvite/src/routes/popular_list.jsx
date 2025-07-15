import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import allMoviesData from '../movies.json';
import ClickableBox from '../component/ClickableBox';
import './popular_list.css';

export default function PopularList() {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        // 6개를 가져오던 것을 3개만 가져오도록 수정
        const topMovies = allMoviesData.slice(0, 3);
        setPopularMovies(topMovies);
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