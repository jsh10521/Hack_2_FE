import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <header className="navbar-header">
        <div className="navbar-container">
        
        <div className="navbar-logo">🎬 MovieReview</div>

        <div className="navbar-search-wrapper">
          <input
            type="text"
            placeholder="Search movies..."
            className="navbar-search-input"
          />
        </div>

        <div className="navbar-auth-buttons">
            <button className="login-button" onClick={() => navigate('/login')}>Login</button>
            <button className="signup-button" onClick={() => navigate('/signup')}>
                Sign Up
            </button>
        </div>
      </div>
    </header>
  )
}