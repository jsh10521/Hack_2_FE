import React, { useState } from 'react';
// 'src' 폴더 바로 아래에 있는 movies.json을 정확히 가리키도록 경로를 수정합니다.
import allMoviesData from '../movies.json';
import ClickableBox from '../component/ClickableBox';
import Pagination from '../component/Pagination';
import './all_list.css';

export default function AllList() {
    const [movies] = useState(allMoviesData);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    const totalPages = Math.ceil(movies.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentMovies = movies.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

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
