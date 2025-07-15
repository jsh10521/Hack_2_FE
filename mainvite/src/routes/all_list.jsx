import React, { useState, useEffect } from 'react';
import ClickableBox from '../component/ClickableBox';
import Pagination from '../component/Pagination';
import './all_list.css';

export default function AllList() {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/movies/') //여기 주소
            .then(res => {
                if (!res.ok) throw new Error('영화 목록을 불러오지 못했습니다.');
                return res.json();
            })
            .then(data => {
                setMovies(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const totalPages = Math.ceil(movies.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentMovies = movies.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>에러: {error}</div>;

    return (
        <div className="all-list-container">
            <h1 className="all-list-title">전체 영화 목록</h1>

            <div className="movie-grid">
                {currentMovies.map((movie) => (
                    <ClickableBox
                        key={movie.id}
                        imageSrc={movie.poster_url}
                        to={`/detail_list/${movie.id}`}
                        title={movie.title_kor}
                    />
                ))}
            </div>

            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
}