import React, { useState } from 'react';
import "./signup.css";

import { signup } from '../api/signup_api';

import { useNavigate } from "react-router-dom";


export default function SignupSection() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        password1: "",
        password2: "",
        nickname: "",
  });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
  };

    const handleSignup = async () => {
        if (form.password1 !== form.password2){
            alert("비밀번호가 일치하지 않습니다!")
        }

        const result = await signup(form);
        if(result?.success){
            alert("회원가입 성공!");
            navigate("/");
        }
        else{
            alert( `${result?.message || "서버오류"}`);
        }
  }

  return (

    <div className="page-wrapper">
    <div className="signup-container">
        <div className="signup-title">
            회원가입
        </div>

        <div className="signup-inputs">
        <input 
            className="signup-input"
            name="username" 
            placeholder="아이디" 
            onChange={handleChange} 
        />
        <input 
            className="signup-input"
            name="password1" 
            type="password" 
            placeholder="비밀번호" 
            onChange={handleChange} 
        />
        <input 
            className="signup-input"
            name="password2" 
            type="password" 
            placeholder="비밀번호 확인" 
            onChange={handleChange} 
        />
        <input 
            className="signup-input"
            name="nickname" 
            placeholder="닉네임" 
            onChange={handleChange} 
        />
        </div>

        <button className="signup-buttons" onClick={handleSignup}>
            가입하기
        </button>
    </div>
    </div>
  );
}