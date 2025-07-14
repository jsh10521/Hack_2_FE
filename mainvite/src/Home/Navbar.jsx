import React from 'react'
import './Navbar.css'

export default function Navbar() {
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
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    </header>
  )
}
