import React from 'react'

const ShimmerUI = () => {
  return (
    <div>
        <div className="bg-white p-4 border-2 border-blue-300 rounded-lg w-screen relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 animate-shimmer"></div>
        </div>
        <div className="bg-white p-4 border-2 border-blue-300 rounded-lg w-screen relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 animate-shimmer"></div>
        </div>
        <div className="bg-white p-4 border-2 border-blue-300 rounded-lg w-screen relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 animate-shimmer"></div>
        </div>
        <div className="bg-white p-4 border-2 border-blue-300 rounded-lg w-screen relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 animate-shimmer"></div>
        </div>
    </div>
  )
}

export default ShimmerUI
