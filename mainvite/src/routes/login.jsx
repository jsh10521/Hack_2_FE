import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";
// import { login } from '../api/login_api';

export default function LoginSection() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    const result = await login(id, pw);

    if (result && result.access) {
      console.log('로그인 결과:', result);
      localStorage.setItem('token', result.access);
      alert("로그인 성공");
      navigate("/");
    } else {
      console.log('로그인 실패');
      alert("로그인 실패");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("로그아웃 되었습니다.");
    window.location.reload();
  };

  const token = localStorage.getItem("token");

  return (
    <div className="login-container">
      {!token ? (
        <>
          <div className="login-title">Login</div>
          <div className="login-inputs">
            <input
              className="login-input"
              type="text"
              placeholder="아이디"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <input
              className="login-input"
              type="password"
              placeholder="비밀번호"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
          </div>
          <button className="login-button" onClick={handleLogin}>
            로그인
          </button>
        </>
      ) : (
        <>
          <p>로그인 상태입니다.</p>
          <button className="login-button" onClick={handleLogout}>
            로그아웃
          </button>
        </>
      )}
    </div>
  );
}
