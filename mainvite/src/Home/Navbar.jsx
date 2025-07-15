import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const [query, setQuery] = useState(''); // 1. 검색어 입력을 관리할 state 추가

    const handleLogout = () => {
        logout();
        alert('로그아웃 되었습니다.');
        navigate('/');
    };

    // 2. 검색 실행 시 호출될 함수
    const handleSearch = (e) => {
        e.preventDefault(); // form 태그의 기본 동작(새로고침) 방지
        if (!query.trim()) {
            alert('검색어를 입력해주세요.');
            return;
        }
        // 검색 결과 페이지로 이동하면서 검색어를 쿼리 파라미터로 전달
        navigate(`/search?q=${query}`);
    };

    return (
        <header className="navbar-header">
            <div className="navbar-container">
                <div className="navbar-logo" onClick={() => navigate('/')}>
                    🎬 MovieReview
                </div>

                {/* 3. 검색창 UI 추가 */}
                <form className="navbar-search-wrapper" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="영화를 검색해보세요..."
                        className="navbar-search-input"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit" className="navbar-search-button">
                        검색
                    </button>
                </form>

                <div className="navbar-auth-buttons">
                    {user ? (
                        <>
                            <span className="navbar-username">{user.username}님</span>
                            <button className="logout-button" onClick={handleLogout}>
                                로그아웃
                            </button>
                        </>
                    ) : (
                        <>
                            <button className="login-button" onClick={() => navigate('/login')}>
                                로그인
                            </button>
                            <button className="signup-button" onClick={() => navigate('/signup')}>
                                회원가입
                            </button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
