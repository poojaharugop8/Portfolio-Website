import React from 'react';
import Pooja from '../assets/PoojaHarugop.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
  return (
    <div
      name='home'
      className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
    >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm a full stack developer
          </h2>
          <p className='text-gray-100 py-4 max-w-md'>
            Software Engineer with 1+ year of Industry Experience in Full-stack
            Dev. A Hard-working, ambitious and a proactive professional to use
            my knowledge and skills to gain practical exposure. Being a quick
            learner with great Communication, Quantitative and Technical skills,
            I wish to develop a more rounded skill-set. Graduated from KLS Gogte
            Institute of Technology in Computer Science.
          </p>
          <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer '>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={Pooja}
            alt='PoojaHarugop'
            className='rounded-2xl mx-auto w-2/3 md:w-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
