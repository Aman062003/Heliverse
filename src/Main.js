import React from 'react'
import image from '../src/assets/MotionArtEffect-logo.png'
import image1 from '../src/assets/motionarteffect-img1.png'
import image2 from '../src/assets/motionarteffect-img2.png'
import image3 from '../src/assets/motionarteffect-img3.png'
import image4 from '../src/assets/motionarteffect-img4.png'
import image5 from '../src/assets/motionarteffect-img5.png'
import '@fontsource/outfit'
import '@fontsource/sora'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import bob from '../src/assets/motionarteffect-img10.png'
import joe from '../src/assets/motionarteffect-img11.png'
import logo from '../src/assets/motionarteffect-img8.png'
import like from '../src/assets/motionarteffect-img6.png'
import moon from '../src/assets/motionarteffect-img7.png'
import stun from '../src/assets/motionarteffect-img9.png'

function Main() {
  return (
    <main className="bg-black py-16">
      {/* body Navbar */}
      <div className="flex justify-between px-36 py-8">
        <div className="cursor-pointer">
          <img src={image} alt='logo' />
        </div>
        <button className="bg-white font-outfit text-xl rounded w-48 hover:bg-transparent hover:text-white border border-white border-solid ">Purchase Now</button>
      </div>

      {/* second section */}

      <div className='flex px-36 py-20'>
        <div className="">
          <p className="bg-gradient-to-r from-orange-500 via-purple-600 to-blue-800 bg-clip-text text-transparent from-neutral-250 text-lg font-sora">Transform <br /> Your Website</p>
          <p className='text-white text-xl font-outfit py-3'>With Motion Art <br />Effect</p>
        </div>
        <div className="mx-40">
          <h3 className="text-white font-sora text-6xl  leading-tight font-semibold">Attract Your <br /> Visitors Attention <br /> With Colorful <br /> <span className="bg-gradient-to-r from-orange-500 via-purple-600 to-blue-800 bg-clip-text text-transparent font-Sora">Motion Art Effect</span></h3>
          <p className='text-gray-400 py-4 font-outfit '>Unleash the power of creativity with MotionArtEffect Art for Elementor - your <br /> ultimate solution for seamlessly integrating captivating animations into <br /> your website</p>
        </div>
      </div>

      {/* third section */}

      <div className='text-white flex py-3 justify-center items-center font-outfit text-xl '>
        Trusted by thousands of users across the world
      </div>
      <div className='flex justify-between my-14 mx-32'>
        <div className='flex items-center'>
          <img src={image2} alt='1' />
          <div className='w-30 h-20 rounded-full mr-4'>
            <img src={image4} alt='' className='w-30 h-5 px-4 my-3' />
            <div className='text-white px-4 my-3 font-outfit'>
              4.5 Scores, 9 reviews
            </div>
          </div>

        </div>

        <div className='flex items-center'>
          <img src={image1} alt='2' />
          <div className='w-30 h-20 rounded-full mr-4'>
            <img src={image4} alt='' className='w-30 h-5 px-4 my-3' />
            <div className='text-white px-4 my-3 font-outfit'>
              4.5 Scores, 9 reviews
            </div>
          </div>
        </div>

        <div className='flex items-center'>
          <img src={image3} alt='3' />
          <div className='w-30 h-20 rounded-full mr-4'>
            <img src={image4} alt='' className='w-30 h-5 px-4 my-3' />
            <div className='text-white px-4 my-3 font-outfit'>
              4.5 Scores, 9 reviews
            </div>
          </div>
        </div>
      </div>

      {/* fourth Section */}

      <div className='text-white flex py-16 justify-around'>
        <div className='text-gray-200 font-outfit '>
          <h3 className='text-4xl font-semibold font-sora leading-relaxed -ml-6'>
            Turn Your Cursor Into A Colorful <br /> Magic Wand & Charm Your Visitors
          </h3>
          <p className='font-outfit font-xl text-gray-300 -ml-6 my-4 leading-relaxed'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse <br /> your website with visually stunning motion art elements.</p>
          <button
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white font-sora py-4 px-16 rounded-3xl opacity-1 cursor-pointer -ml-6 leading-relaxed text-lg"
            disabled
          >
            Purchase From Envato <ArrowForwardIcon className='ml-2' />
          </button>
        </div>

        <div className=" rounded ">
          <img src={image5} alt='' />
        </div>
      </div>

      {/* fifth Section */}

      <div className=" flex flex-col justify-center items-center  py-20">
        <h1 className="text-4xl font-semibold  text-slate-300 mb-8 text-center font-sora">Apply On Any Section Or Enable <br /> For Whole Page</h1>


        <div className="flex gap-5 py-12">
          <div className='bg-gradient-to-b from-purple-950 via-indigo-900 to-slate-600 rounded-xl border border-slate-600'>
            <h1 className='text-white text-2xl font-sora ml-4 py-6'>Apply On Section</h1>
            <p className='text-slate-400 leading-relaxed  ml-4 font-outfit  '>Apply on section is a game-changer, offering an unparalleled way to <br /> manage applications directly from your website. </p>
            <img src={joe} alt='joe' className=" mx-8 py-7 " />
          </div>

          <div className="bg-gradient-to-b from-purple-950 via-indigo-900 to-slate-600 rounded-xl mt-20 -mb-24 border border-slate-600">
            <h1 className='text-white text-2xl font-sora ml-4 py-6 bg'>Apply On Page</h1>
            <p className='leading-relaxed  ml-4 font-outfit text-slate-400'>Take your website to new heights with Motion Art for Elementor.<br /> Embrace the power of motion and animation. </p>
            <img src={bob} alt='bob' className=" mx-8 py-7 " />
          </div>

        </div>

        {/* Sixth Section */}


        <div className=" flex bg-gradient-to-b from-purple-950 via-indigo-900 to-slate-800  flex-col h-72 w-4/5  mt-48 border border-slate-600 rounded-xl  ">
          <h1 className="text-2xl   text-slate-300 mb-2 text-center font-sora py-5">Supported by All Popular Browsers</h1>
          <p className='text-slate-400 text-center font-outfit '>Rest assured, Motion Art is designed to be compatible <br /> with all major web browsers.</p>
          <img src={logo} alt='Centered' className="py-10  mx-auto" />
        </div>

        {/* Last Section */}

        <div className='text-white py-32'>
          <div className=' flex-col'>
            <h1 className='text-center text-4xl font-sora leading-relaxed'>An All-Round Plugin With <br /> Powerful Features</h1>
            <p className='text-center leading-relaxed text-slate-400 py-4'>Whether you're a seasoned web designer or just starting out, Motion Art for <br /> Elementor seamlessly integrates with the Elementor platform, providing you  <br /> with a seamless and intuitive experience.</p>
          </div>
        </div>
        {/* -------------------------------------------- */}
        <div className='flex gap-6 -my-9'>


          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-b from-purple-950 via-indigo-900 to-slate-800 dark:border-gray-700 ">
            <img src={stun} alt='' />

            <div class="p-5">

              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-sora">Light Weight</h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 font-outfit">Motion Art for Elementor is designed to be lightweight.</p>

            </div>
          </div>



          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-b from-purple-950 via-indigo-900 to-slate-800 dark:border-gray-700">

            <img src={like} alt='' />

            <div class="p-5">

              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-sora">100% Responsive</h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 font-outfit">Create a consistent visual experience across all devices.</p>

            </div>
          </div>




          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-b from-purple-950 via-indigo-900 to-slate-800 dark:border-gray-700">

            <img src={moon} alt="" />

            <div class="p-5">

              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-sora">User Friendly Interface</h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 font-outfit">Ensure a smooth experience for both applicants and administrators.</p>

            </div>
          </div>


        </div>



      </div>



    </main>
  )
}

export default Main