import React from 'react';
import { FooterSection } from '../Elements/elements';

export const Footer = ({ currTheme }) => {
  const date = new Date();

  return (
    <FooterSection currTheme={currTheme}>
      <div>
        <span>
          &copy; {date.getFullYear()} | Nitesh Sharma | All rights reserved.
        </span>
      </div>
    </FooterSection>
  );
};
