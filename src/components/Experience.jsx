import React from 'react';

import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import nextjs from '../assets/nextjs.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';

const Experience = () => {
  return (
    <div>
      <div>
        <div>
          <p>Experience</p>
          <p>These are the technologies I have worked with</p>
        </div>

        <div>
          <div>
            <img src={html} alt='' />
            <p>HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
