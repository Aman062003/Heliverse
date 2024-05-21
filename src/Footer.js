import React from 'react'
import "@fontsource/outfit"
import "@fontsource/sora"

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-500 via-purple-600 to-blue-800 text-white py-5 h-13">
        <div className="container mx-auto px-4 flex justify-between items-center flex-row">
        <div className="text-sm mx-32 font-outfit">@ 2024 Copywrite. All rights reserved by QodeMatrix</div>
        <div className="text-sm mx-32 font-sora">
          <a href="#documentation" className="text-gray-300 hover:text-white mr-8">Documentation</a>
          <a href="#support" className="text-gray-300 hover:text-white">Support</a>
        </div>
      </div>
          
          
          </footer>
  )
}

export default Footer