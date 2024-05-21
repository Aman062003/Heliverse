import React from 'react'
import image from '../src/assets/motionarteffect-img2.png'
import "@fontsource/outfit"
import "@fontsource/sora"

function Navbar() {
  return (
    <nav className='bg-gray-800 text-white w-full py-4 px-6 fixed top-0 left-0 z-50'>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center cursor-pointer">
            <img src={image} alt="Logo" className="h-8 w-10 opacity-0.8"/>
            <h6 className="text-white font-Outfit text-2xl font-bold">envato<span className="text-2xl font-bold text-green-700" >market</span></h6>
            
        </div>
        <div>
          <button className="bg-green-700 hover:bg-green-800 px-6 py-2 rounded-md text-sm font-sora text-white mx-4">Buy now</button>
        </div>
        </div>
    </nav>
  )
}

export default Navbar