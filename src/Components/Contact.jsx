import React from 'react';
import { ContactSection, SubHeading } from '../Elements/elements';
import email from '../Images/icons/email.png';
import telephone from '../Images/icons/telephone.png';
import location from '../Images/icons/location.png';
import { contactArray } from '../data';

export const Contact = ({ currTheme }) => {
  return (
    <ContactSection id='contact' currTheme={currTheme}>
      <SubHeading>Get in Touch</SubHeading>
      <div>
        <ul className='contact-list'>
          <li key='niteshthemerndeveloper@gmail.com'>
            <a
              target='_blank'
              rel='noreferrer'
              href='mailto:niteshthemerndeveloper@gmail.com'
            >
              <span className='email'>
                <img src={email} alt='email' width='30px' />
              </span>
              <span>niteshthemerndeveloper@gmail.com</span>
            </a>
          </li>
          <li key='7987490561'>
            <a target='_blank' rel='noreferrer' href='tel:7987490561'>
              <span className='email'>
                <img src={telephone} alt='telephone' width='30px' />
              </span>
              <span>7987490561</span>
            </a>
          </li>
          <li key='jabalpur'>
            <a target='_blank' rel='noreferrer' href='map'>
              <span className='location'>
                <img src={location} alt='location' width='30px' />
              </span>
              <span>Jabalpur, India</span>
            </a>
          </li>
        </ul>
        <ul className='social-list'>
          {contactArray.map((contact) => (
            <ContactListItem key={contact.title} contact={contact} />
          ))}
        </ul>
      </div>
    </ContactSection>
  );
};

const ContactListItem = ({ contact }) => {
  return (
    <li>
      <a
        title={contact.title}
        target='_blank'
        rel='noreferrer'
        href={contact.link}
      >
        {contact.iconClass === 'sicodewars' ? (
          <span className={contact.iconClass}>
            <img alt='Codewars svg icon' src={contact.icon}></img>
          </span>
        ) : (
          <span className={contact.iconClass}>{contact.icon}</span>
        )}
      </a>
    </li>
  );
};
