import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaRobot, FaGithub, FaMicrophone, FaSatelliteDish, FaBrain, FaEye, FaComments, FaCalculator } from 'react-icons/fa';
import './ChatGrid.css';
// import './FloatingButtons.css';

const gridItems = [
  {
    header: 'Chat',
    icon: <FaComments size={32} className="mb-2 text-primary" />,
    
  },
  {
    header: 'Robot Parts Estimator',
    icon: <FaCalculator size={32} className="mb-2 text-secondary" />,
   
  },
  {
    header: 'AI Image Detection Model',
    icon: <FaEye size={32} className="mb-2 text-primary" />, 
  },
  {
    header: 'Qt Robot Control',
    icon: <FaRobot size={32} className="mb-2 text-success" />, 
  },
  {
    header: 'AI Agent',
    icon: <FaBrain size={32} className="mb-2 text-info" />, 
  },
  {
    header: 'Ground Control Station',
    icon: <FaSatelliteDish size={32} className="mb-2 text-warning" />, 
  },
  {
    header: 'Speech Recognition',
    icon: <FaMicrophone size={32} className="mb-2 text-danger" />, 
  },
  {
    header: ' Github',
    icon: <FaGithub size={32} className="mb-2 text-dark" />, 
    link: 'https://github.com/ROM-robotics',
  },
];

const ChatGrid = ({ theme, filter }) => {
    const filteredItems = gridItems.filter(item =>
      item.header.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <Row className="gx-6 gy-6">
        {filteredItems.map((item, idx) => (
          <Col xs={12} sm={6} md={4} lg={3} key={idx}>
            
              <div className={`custom-card ${theme} text-center`} tabIndex={0}>
  <div className="custom-card-header">
    {item.icon && <div>{item.icon}</div>}
    {item.link ? (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="custom-link"
      >
        {item.header}
      </a>
    ) : (
      item.header
    )}
  </div>
  <div className="custom-card-body">
    {item.body || null}
  </div>
</div>

            
          </Col>
        ))}
      </Row>
    );
  };


 



export default ChatGrid;
