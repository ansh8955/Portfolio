import React from 'react';
import HeroImage from '../src/assets/heroImage.jpeg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";



const Home = () => {
  return (
    <div name ="home" className='h-screen w-full  bg-gradient-to-b from-black via-black to-gray-800'>

    <div className='max-w-screen-lg mx-auto flex flex-col justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>

            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Front End Developer</h2>
        

        <p className='text-gray-500 py-4 max-w-md'>I have a experience of building a Projects and Currently I worked on web applications using technologies like HTML, CSS , JS and React</p>

        <div>

            <button className='group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                Porfolio
                <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25}className="ml-1"/></span>
            </button>
        </div>

    </div>
    <div>
        <img src={HeroImage} alt="profile pic" className='rounded-2xl mx-auto w-1/3 md:w-2/3'/>
    </div>
    </div>
    </div>
    
  )
}

export default Home
