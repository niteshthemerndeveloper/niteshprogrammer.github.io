import React from 'react';
import { typing } from '../Effects/window.effects';
import { ViewportSection } from '../Elements/elements';
import author from './../Images/author.png';

export const Viewport = ({ currTheme }) => {
  typing();
  return (
    <ViewportSection id='viewport' currTheme={currTheme}>
      <div>
        <div className='author-photo'>
          <img src={author} alt='AuthorPhoto' />
        </div>
        <div className='author-description'>
          <div className='intro'>
            <h5>I'm a</h5>
            <h5 className='typing'>Full Stack MERN Developer</h5>
          </div>
          <h1>Nitesh Sharma</h1>
          <p>
            An enthusiastic, result-oriented &amp; innovative Full Stack Web
            Developer. Highly skilled in Technical skills across MERN with a
            great hold on Data Structures &amp; Algorithms. Capable of writing
            clean, reusable &amp; optimized code. Adaptable to team environment,
            proficient in remote collaboration &amp; committed to achieving
            organizational goals.
          </p>
          {/* <p className='resume'>
            <a
              href={require('./../Images/Resume.pdf')}
              target='_blank'
              rel='noreferrer'
            >
              Resume
            </a>
          </p> */}
        </div>
      </div>
    </ViewportSection>
  );
};
