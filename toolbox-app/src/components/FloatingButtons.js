/*import React from 'react';
import { FaFacebookF, FaYoutube, FaTelegramPlane, FaViber, FaEnvelope } from 'react-icons/fa';
import './FloatingButtons.css';

const rightButtons = [
  {
    icon: <FaFacebookF />,
    
        link: 'https://www.facebook.com/ROMROBOTS',

    color: '#1877f3',
    label: 'Facebook'
  },
  {
    icon: <FaYoutube />,
    
    link: 'https://www.youtube.com/@ROMROBOTICS',
    color: '#ff0000',
    label: 'YouTube'
  },
  {
    icon: <FaTelegramPlane />,
   
     link: 'https://t.me/rom_dynamics',
    color: '#229ed9',
    label: 'Telegram'
  }
];

const leftButtons = [
  {
    icon: <FaViber />,
  
     link: 'viber://add?number=+959250074008',
    color: '#665cac',
    
    label: 'Viber: +959250074008'  
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
          style={{ backgroundColor: btn.color, bottom: `calc(${idx} * var(--btn-step, 60px) + 20px)`}}
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
          style={{
            backgroundColor: btn.color,
            // bottom: `calc(${idx} * var(--btn-step, 60px) + 20px)`
          }}
          title={btn.label}
        >
          {btn.icon}
        </a>
      ))}
    </div>
  </>
);

export default FloatingButtons; 
*/
/*
import React from 'react';
import { FaFacebookF, FaYoutube, FaTelegramPlane, FaViber, FaEnvelope } from 'react-icons/fa';
import './FloatingButtons.css';

const rightButtons = [
  {
    icon: <FaFacebookF />,
    link: 'https://www.facebook.com/ROMROBOTS',
    color: '#1877f3',
    label: 'Facebook'
  },
  {
    icon: <FaYoutube />,
    link: 'https://www.youtube.com/@ROMROBOTICS',
    color: '#ff0000',
    label: 'YouTube'
  },
  {
    icon: <FaTelegramPlane />,
    link: 'https://t.me/rom_dynamics',
    color: '#229ed9',
    label: 'Telegram'
  }
];

const leftButtons = [
  {
    icon: <FaViber />,
    link: 'viber://add?number=+959250074008',
    color: '#665cac',
    label: 'Viber: +959250074008'
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
      {rightButtons.map((btn) => (
        <a
          key={btn.label}
          href={btn.link}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn"
          style={{ backgroundColor: btn.color }}
          title={btn.label}
        >
          {btn.icon}
        </a>
      ))}
    </div>

    <div className="floating-buttons left">
      {leftButtons.map((btn) => {
        if (btn.label.startsWith('Viber')) {
          return (
            <div className="tooltip-wrapper" key={btn.label}>
              <a
                href={btn.link}
                target="_blank"
                rel="noopener noreferrer"
                className="floating-btn"
                style={{ backgroundColor: btn.color }}
                aria-label="Viber"
              >
                {btn.icon}
              </a>
              <div className="tooltip-content">+959 2500 7400 8</div>
            </div>
          );
        }

        return (
          <a
            key={btn.label}
            href={btn.link}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-btn"
            style={{ backgroundColor: btn.color }}
            title={btn.label}
          >
            {btn.icon}
          </a>
        );
      })}
    </div>
  </>
);

export default FloatingButtons;
*/

import React from 'react';
import { FaFacebookF, FaYoutube, FaTelegramPlane, FaViber, FaEnvelope } from 'react-icons/fa';
import './FloatingButtons.css';

const rightButtons = [
  {
    icon: <FaFacebookF />,
    link: 'https://www.facebook.com/ROMROBOTS',
    color: '#1877f3',
    label: 'Facebook'
  },
  {
    icon: <FaYoutube />,
    link: 'https://www.youtube.com/@ROMROBOTICS',
    color: '#ff0000',
    label: 'YouTube'
  },
  {
    icon: <FaTelegramPlane />,
    link: 'https://t.me/rom_dynamics',
    color: '#229ed9',
    label: 'Telegram'
  }
];

const leftButtons = [
  {
    icon: <FaViber />,
    link: 'viber://add?number=+959250074008',
    color: '#665cac',
    label: 'Viber: +959250074008'
  },
  {
    icon: <FaEnvelope />,
    link: 'mailto:info@romdynamics.com',
    color: '#333',
    label: 'Email: info@romdynamics.com'
  }
];

const FloatingButtons = () => (
  <>
    <div className="floating-buttons right">
      {rightButtons.map((btn) => (
        <a
          key={btn.label}
          href={btn.link}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn"
          style={{ backgroundColor: btn.color }}
          title={btn.label}
        >
          {btn.icon}
        </a>
      ))}
    </div>

    <div className="floating-buttons left">
      {leftButtons.map((btn) => {
        const isViber = btn.label.startsWith('Viber');
        const isEmail = btn.label.startsWith('Email');

        if (isViber || isEmail) {
          const tooltipText = isViber
            ? '+959 2500 7400 8'
            : 'info@romdynamics.com';

          return (
            <div className="tooltip-wrapper" key={btn.label}>
              <a
                href={btn.link}
                target="_blank"
                rel="noopener noreferrer"
                className="floating-btn"
                style={{ backgroundColor: btn.color }}
                aria-label={btn.label}
              >
                {btn.icon}
              </a>
              <div className="tooltip-content">{tooltipText}</div>
            </div>
          );
        }

        return (
          <a
            key={btn.label}
            href={btn.link}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-btn"
            style={{ backgroundColor: btn.color }}
            title={btn.label}
          >
            {btn.icon}
          </a>
        );
      })}
    </div>
  </>
);

export default FloatingButtons;
