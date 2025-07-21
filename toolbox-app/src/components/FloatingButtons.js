import React from 'react';
import { FaFacebookF, FaYoutube, FaTelegramPlane, FaViber, FaEnvelope } from 'react-icons/fa';
import './FloatingButtons.css';

const rightButtons = [
  {
    icon: <FaFacebookF />,
    link: 'https://facebook.com/',
    color: '#1877f3',
    label: 'Facebook'
  },
  {
    icon: <FaYoutube />,
    link: 'https://youtube.com/',
    color: '#ff0000',
    label: 'YouTube'
  },
  {
    icon: <FaTelegramPlane />,
    link: 'https://telegram.org/',
    color: '#229ed9',
    label: 'Telegram'
  }
];

const leftButtons = [
  {
    icon: <FaViber />,
    link: 'https://viber.com/',
    color: '#665cac',
    label: 'Viber'
  },
  {
    icon: <FaEnvelope />,
    link: 'mailto:your@email.com',
    color: '#333',
    label: 'Email'
  }
];

const FloatingButtons = () => (
  <>
    <div className="floating-buttons right">
      {rightButtons.map((btn, idx) => (
        <a
          key={btn.label}
          href={btn.link}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn"
          style={{ backgroundColor: btn.color, bottom: `${idx * 60 + 20}px` }}
          title={btn.label}
        >
          {btn.icon}
        </a>
      ))}
    </div>
    <div className="floating-buttons left">
      {leftButtons.map((btn, idx) => (
        <a
          key={btn.label}
          href={btn.link}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn"
          style={{ backgroundColor: btn.color, bottom: `${idx * 60 + 20}px` }}
          title={btn.label}
        >
          {btn.icon}
        </a>
      ))}
    </div>
  </>
);

export default FloatingButtons; 