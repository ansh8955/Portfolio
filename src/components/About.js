import React from 'react'

const About = () => {
  return (
    <div class = "about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.
        
        </p>
<br/>
        <p className='text-xl'>
        Growing up bilingual, I developed a love for languages and I currently speak four of them fluently. I believe that this skill has given me a unique perspective and allows me to communicate effectively with clients from all over the world. One of my strengths is adding a personal touch to my projects by adding the client's identity and message into the design, creating meaningful and beautiful end products that are both eye-catching and user-friendly.
        </p>
      </div>
    </div>
  )
}

export default About
