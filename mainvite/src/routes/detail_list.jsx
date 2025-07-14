import React from 'react';
import { useParams, Link } from 'react-router-dom';
import allMoviesData from '../movies.json';
import './detail_list.css';

// 별점 아이콘을 표시하는 간단한 컴포넌트
const StarRating = ({ rating }) => {
    const totalStars = 5;
    const filledStars = Math.round(rating / 2); // 10점 만점 평점을 5점 만점으로 변환

    return (
        <div className="star-rating">
            {[...Array(totalStars)].map((_, index) => (
                <span key={index} className={index < filledStars ? 'star filled' : 'star'}>
                    ★
                </span>
            ))}
            <span className="rating-score">{rating.toFixed(1)}</span>
        </div>
    );
};

export default function DetailList() {
    const { id } = useParams();
    const movie = allMoviesData.find((m) => m.id === parseInt(id));

    if (!movie) {
        return (
            <div className="detail-page-wrapper">
                <div className="error-container">
                    <h1>404</h1>
                    <p>요청하신 영화 정보를 찾을 수 없습니다.</p>
                    <Link to="/" className="go-home-button">
                        홈으로 돌아가기
                    </Link>
                </div>
            </div>
        );
    }

    // 임시 데이터 (나중에 실제 데이터로 교체)
    const movieDetails = {
        ...movie,
        overview: movie.overview || '현재 등록된 줄거리 정보가 없습니다. 곧 업데이트될 예정입니다.',
        genres: movie.genres || ['미분류'],
        release_date: movie.release_date || '정보 없음',
        vote_average: movie.vote_average || 7.5, // 10점 만점 기준 임시 평점
        actors: movie.actors || ['배우 정보 없음'],
    };

    return (
        <div className="detail-page-wrapper">
            <div className="detail-container">
                <img className="detail-poster" src={movieDetails.poster_url} alt={movieDetails.title_kor} />
                <div className="detail-info">
                    <h1 className="detail-title-kor">{movieDetails.title_kor}</h1>
                    <h2 className="detail-title-eng">{movieDetails.title_eng}</h2>

                    <div className="info-section">
                        <span className="info-label">개봉일</span>
                        <span>{movieDetails.release_date}</span>
                    </div>
                    <div className="info-section">
                        <span className="info-label">장르</span>
                        <span>{movieDetails.genres.join(', ')}</span>
                    </div>
                    <div className="info-section">
                        <span className="info-label">평점</span>
                        <StarRating rating={movieDetails.vote_average} />
                    </div>

                    <div className="info-section plot">
                        <h3>줄거리</h3>
                        <p>{movieDetails.overview}</p>
                    </div>

                    <div className="info-section actors">
                        <h3>주요 출연진</h3>
                        <p>{movieDetails.actors.join(', ')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
