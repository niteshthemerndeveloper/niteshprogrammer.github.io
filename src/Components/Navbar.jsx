import React, { useState } from 'react';
import { Nav } from '../Elements/elements';

export const Navbar = ({ currTheme, handleTheme }) => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <Nav id='nav' currTheme={currTheme}>
      <div>
        <a href='/'>
          <p>
            <span>NS</span>
          </p>
        </a>
        <div
          className={hamburger ? 'hamburger show-anime' : 'hamburger'}
          onClick={() => setHamburger(!hamburger)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li>
            <a href='#viewport'>Home</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
          <li className='toggle'>
            <label className='switch'>
              <input
                type='checkbox'
                name='themeSwitch'
                onChange={handleTheme}
                checked={currTheme === 'light' ? true : false}
              />
              <span className='slider round'></span>
            </label>
          </li>
        </ul>
      </div>
    </Nav>
  );
};
