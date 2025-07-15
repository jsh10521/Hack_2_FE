import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import allMoviesData from '../movies.json';
import './detail_list.css';

// 별점 컴포넌트
const StarRating = ({ rating, onRating, isInteractive = false }) => {
    const [hover, setHover] = useState(0);
    const totalStars = 5;
    const displayRating = isInteractive ? rating : Math.round((rating / 10) * totalStars);

    return (
        <div className={`star-rating ${isInteractive ? 'interactive' : ''}`}>
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <span
                        key={starValue}
                        className={starValue <= (hover || displayRating) ? 'star filled' : 'star'}
                        onClick={() => isInteractive && onRating(starValue)}
                        onMouseEnter={() => isInteractive && setHover(starValue)}
                        onMouseLeave={() => isInteractive && setHover(0)}
                    >
                        ★
                    </span>
                );
            })}
        </div>
    );
};

export default function DetailList() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();
    const movie = allMoviesData.find((m) => m.id === parseInt(id));

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [myRating, setMyRating] = useState(0);

    useEffect(() => {
        const savedComments = JSON.parse(localStorage.getItem(`comments_${id}`)) || [];
        setComments(savedComments);
    }, [id]);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (!user) {
            alert('코멘트를 작성하려면 로그인이 필요합니다.');
            navigate('/login');
            return;
        }
        if (!newComment.trim()) {
            alert('코멘트 내용을 입력해주세요.');
            return;
        }

        const commentToAdd = {
            username: user.username,
            text: newComment,
            id: Date.now(),
        };

        const updatedComments = [commentToAdd, ...comments];
        setComments(updatedComments);
        localStorage.setItem(`comments_${id}`, JSON.stringify(updatedComments));
        setNewComment('');
    };

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

    const movieDetails = {
        overview: movie.overview || '현재 등록된 줄거리 정보가 없습니다.',
        genres: movie.genres || ['미분류'],
        release_date: movie.release_date || '정보 없음',
        vote_average: movie.vote_average || 0,
        actors: movie.actors || [],
    };

    return (
        <div className="detail-page-wrapper">
            <div className="detail-container">
                <img className="detail-poster" src={movie.poster_url} alt={movie.title_kor} />
                <div className="detail-info">
                    <h1 className="detail-title-kor">{movie.title_kor}</h1>
                    <h2 className="detail-title-eng">{movie.title_eng}</h2>
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
                        <StarRating rating={movie.vote_average || 0} />
                        <span className="rating-score">{(movie.vote_average || 0).toFixed(1)}</span>
                    </div>
                    <div className="info-section plot">
                        <h3>줄거리</h3>
                        <p>{movieDetails.overview}</p>
                    </div>
                    <div className="info-section actors">
                        <h3>주요 출연진</h3>
                        <div className="actor-list">
                            {movieDetails.actors.length > 0 ? (
                                movieDetails.actors.map((actor, index) => (
                                    <div key={index} className="actor-profile">
                                        <img src={actor.photo_url} alt={actor.name} className="actor-photo" />
                                        <span className="actor-name">{actor.name}</span>
                                    </div>
                                ))
                            ) : (
                                <p>배우 정보 없음</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="comment-section-wrapper">
                <h3 className="section-title">코멘트 & 평점 남기기</h3>

                <div className="rating-box">
                    <span>내 평점:</span>
                    <StarRating rating={myRating} onRating={setMyRating} isInteractive={true} />
                </div>

                <form className="comment-form" onSubmit={handleCommentSubmit}>
                    <textarea
                        className="comment-textarea"
                        placeholder={
                            user
                                ? `${user.username}님, 코멘트를 남겨보세요...`
                                : '코멘트를 작성하려면 로그인이 필요합니다.'
                        }
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        disabled={!user}
                    />
                    <button type="submit" className="comment-submit-button" disabled={!user}>
                        등록
                    </button>
                </form>

                <div className="comment-list">
                    {comments.length > 0 ? (
                        comments.map((comment) => (
                            <div key={comment.id} className="comment-item">
                                <span className="comment-username">{comment.username}</span>
                                <p className="comment-text">{comment.text}</p>
                            </div>
                        ))
                    ) : (
                        <p className="no-comments">아직 작성된 코멘트가 없습니다.</p>
                    )}
                </div>
            </div>
        </div>
    );
}