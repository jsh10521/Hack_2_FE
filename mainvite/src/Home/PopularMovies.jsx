import React, { useState } from 'react'
import Navbar from './Navbar'
import Pagination from './Pagination'

export default function PopularMovies() {
  const [page, setPage] = useState(1)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e7effe] to-white text-gray-800">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-2">Popular Movies</h1>
        <p className="text-gray-500 mb-8">Discover the most popular movies right now</p>

        {/* 여기에 영화 카드 들어감 (지금은 비워둠) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Sample Movie Card - 삭제하고 실제 카드로 대체 */}
          <div className="bg-gray-200 h-[300px] rounded-lg shadow-md"></div>
          <div className="bg-gray-200 h-[300px] rounded-lg shadow-md"></div>
        </div>

        {/* 페이지네이션 */}
        <div className="flex justify-center mt-10">
          <Pagination page={page} setPage={setPage} totalPages={5} />
        </div>
      </div>
    </div>
  )
}
