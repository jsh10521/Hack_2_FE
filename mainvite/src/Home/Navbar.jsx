import React from 'react'

export default function Navbar() {
  return (
    <header className="bg-[#1c2b6c] text-white py-4 shadow">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* 로고 */}
        <div className="text-xl font-bold">🎬 MovieReview</div>

        {/* 검색창 */}
        <div className="flex-1 flex justify-center">
          <input
            type="text"
            placeholder="Search movies..."
            className="w-full max-w-md px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* 로그인 / 회원가입 */}
        <div className="flex gap-3 justify-center md:justify-end">
          <button className="bg-white text-[#1c2b6c] px-4 py-2 rounded hover:bg-gray-100 font-semibold text-sm">
            Login
          </button>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 font-semibold text-sm">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  )
}
