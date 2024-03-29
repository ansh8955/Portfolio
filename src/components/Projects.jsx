import React from 'react';
import passgenerator from '../assets/portfolio/passgenerator.PNG';
import agecalculator from '../assets/portfolio/agecalculator.PNG';
import pookimon from '../assets/portfolio/pookimon.PNG';
import dadjokegenerate from '../assets/portfolio/dadjokegenerate.PNG';
import resumeTemplate from '../assets/portfolio/resumeTemplate.png';
import Leaderboard from '../assets/portfolio/Leaderboard.png';


const Projects = () => {

    const projects=[

{

    id:1,
    src:passgenerator

},
{

    id:2,
    src:agecalculator

},
{

    id:3,
    src:pookimon

},
{

    id:4,
    src:dadjokegenerate

},
{

    id:5,
    src:resumeTemplate

},
{

    id:6,
    src:Leaderboard

},



    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white '>

    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>


        <div className='pb-8'>


            <p className='text-4xl font-bold border-b-4 inline border-gray-500'>Projects</p>
            <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
{

    projects.map(({id,src})=>(

        <div key ={id} className='shadow-md shadow-gray-600 rounded-lg'>

<img src={src} alt='' className='rounded-md hover:scale-105'/>
<div className='flex  items-center justify-center'>
    <button className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'>Demo</button>
    <button className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'>Code</button>
</div>
</div>

    ))
}


           
        </div>
    </div>
      
    </div>
  )
}

export default Projects
