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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque
          quasi culpa repellendus iusto et aspernatur ipsum, consectetur
          accusamus, dolore, sequi tempore libero soluta expedita debitis. Odio
          minus quasi rem?
        </p>
        <br />
        <p className='text-xl'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum sequi
          eius laudantium maxime, reprehenderit doloremque dolorum, omnis totam
          et, laboriosam modi repellat labore. Saepe veritatis quas hic dolores
          iure ipsum.
        </p>
      </div>
    </div>
  );
};

export default About;
