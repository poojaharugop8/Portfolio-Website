import React from 'react';
import facebookClone from '../assets/portfolio/facebookClone.png';
import HotelRooms from '../assets/portfolio/HotelAppRooms.png';
import Hotel from '../assets/portfolio/HotelApp.png';
import NewsMonkey from '../assets/portfolio/NewsMonkey.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: facebookClone,
      link: 'https://github.com/poojaharugop8/Facebook-clone',
      projectName: 'Facebook Clone',
    },
    {
      id: 2,
      src: HotelRooms,
      link: 'https://github.com/poojaharugop8/Hotel-Management-Reactjs-Microservices-',
      projectName: 'Hotel Rooms',
    },
    {
      id: 3,
      src: Hotel,
      link: 'https://github.com/poojaharugop8/Hotel-Management-Reactjs-Microservices-',
      projectName: 'Hotel App',
    },
    {
      id: 4,
      src: NewsMonkey,
      link: 'https://github.com/poojaharugop8/NewsMonkey-Reactjs',
      projectName: 'News Monkey',
    },
  ];

  return (
    <div
      name='portfolio'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-6'>Checkout some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, link, projectName }) => {
            return (
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <a href={link} target='_blank' rel='noreferrer'>
                  <img
                    src={src}
                    alt={projectName}
                    className='rounded-md duration-200 hover:scale-105'
                  />
                </a>
                <div className='flex items-center justify-center'>
                  <button className='w-1/2 m-4 duration-200 hover:scale-105 '>
                    <a href={link} target='_blank' rel='noreferrer'>
                      {projectName}
                    </a>
                  </button>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                    <a href={link} target='_blank' rel='noreferrer'>
                      Code
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
