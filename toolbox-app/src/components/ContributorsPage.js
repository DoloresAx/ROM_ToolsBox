



// src/components/ContributorsPage.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './ContributorsPage.css'; // Add custom styles (optional)

const contributors = [
  {
    name: 'Yoon Shwe Sin',
    github: 'https://github.com/Yoon-shwe',
    
  },
  {
    name: 'Kaung Wai Zin',
    github: 'https://github.com/S1610',
    
  },
  {
    name: 'Thu Kha Min Tun',
    github: 'https://github.com/Asta224',
    
  },
  {
    name: 'Eaint Myint Mo',
    github: 'https://github.com/Eaint-tech',
    
  },
  {
    name: 'Hmue Set San',
    github: 'https://github.com/HmueGyi',
    
  },
  {
    name: 'Aye Yadanar',
    github: 'https://github.com/AyeYadanar',
    
  },
   {
    name: 'Thaw Eaindra Oo',
    github: 'https://github.com/Thaw3',
    
  },
  {
    name: 'Mya Kay Thi Khaing',
    github: 'https://github.com/khaing684',
    
  },
  {
    name: 'Myo Myint Thu',
    github: 'https://github.com/MyoMyintThu224',
    
  },
   {
    name: 'Saw Hla Nandar',
    github: 'https://github.com/yoyoasaw10',
    
  },
  {
    name: 'Nan Myat Su',
    github: 'https://github.com/NangMyatHsu',
    
  },
  
];

const ContributorsPage = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5 fw-bold "> Project Contributors</h2>
      <Row className="g-4 justify-content-center">
        {contributors.map((contributor, idx) => {
          const username = contributor.github.split('/').pop();

          return (
            <Col xs={12} sm={6} md={4} lg={3} key={idx}>
              <Card className="contributor-card h-100 text-center shadow-sm border-0 p-3">
                <div className="avatar-wrapper mx-auto mb-3">
                  <Card.Img
                    variant="top"
                    src={`https://github.com/${username}.png`}
                    alt={`${contributor.name}'s avatar`}
                    className="rounded-circle border"
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="fs-5 fw-semibold">{contributor.name}</Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">{contributor.role}</Card.Subtitle>
                  <Button
                    variant="outline-dark"
                    href={contributor.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                  >
                    GitHub Profile
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ContributorsPage;
