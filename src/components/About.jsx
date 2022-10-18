import React from 'react';

const About = () => {
  return (
    <div
      name='about'
      className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>
        <p className='text-xl mt-20'>
          Software Engineer with 1+ year of Industry Experience in Full-stack
          Dev. A Hard-working, ambitious and a proactive professional to use my
          knowledge and skills to gain practical exposure. Being a quick learner
          with great Communication, Quantitative and Technical skills, I wish to
          develop a more rounded skill-set.
        </p>
        <br />
        <p className='text-xl'>
          Graduated from KLS Gogte Institute of Technology in Computer Science
          in 2021. Currently working at Brillio tech. I have been working for a
          Heath care Project, which gained me a lot of expertise in USA’s Health
          Structure and their requirements.
        </p>
      </div>
    </div>
  );
};

export default About;
