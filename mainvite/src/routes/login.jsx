import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './login.css'; // login.css가 없다면 새로 만들어주세요.

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [form, setForm] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (!form.username || !form.password) {
            alert('아이디와 비밀번호를 모두 입력해주세요.');
            return;
        }
        // 실제로는 서버 API 응답을 사용해야 합니다.
        // 지금은 로그인 성공 시, 사용자 이름(ID)을 저장하는 예시입니다.
        const userData = { username: form.username };
        login(userData);
        alert(`${form.username}님, 환영합니다!`);
        navigate('/');
    };

    return (
        <div className="page-wrapper">
            <form className="login-container" onSubmit={handleLogin}>
                <h1 className="login-title">로그인</h1>
                <div className="login-inputs">
                    <input
                        name="username"
                        className="login-input"
                        placeholder="아이디"
                        value={form.username}
                        onChange={handleChange}
                    />
                    <input
                        name="password"
                        type="password"
                        className="login-input"
                        placeholder="비밀번호"
                        value={form.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="login-button">
                    로그인
                </button>
            </form>
        </div>
    );
}
