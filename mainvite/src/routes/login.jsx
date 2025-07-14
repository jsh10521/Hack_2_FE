import React, { useState } from 'react';
import "./logintotal.css";
import { login } from '../api/login_api';


export default function LoginSection() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');


  const handleLogin = async () => {
    const result = await login(id, pw);

    if(result && result.access){
        console.log('로그인 결과:', result);
        localStorage.setItem('token',result.access);
        alert("로그인 성공")
    }
    else{
        console.log('로그인 실패');
        alert("로그인 실패")
    }
  };

  return (
    <div className="login-container">
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
    </div>
  );
}