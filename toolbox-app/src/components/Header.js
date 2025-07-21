import React from 'react';
import ThemeToggle from './ThemeToggle';
import { Container } from 'react-bootstrap';

const Header = ({ theme, toggleTheme }) => (
  <header className="py-3 border-bottom position-relative">
    <Container fluid className="d-flex justify-content-center align-items-center position-relative">
      <h2 className="mb-0 mx-auto text-center">ROM Toolbox Store</h2>
      <div style={{ position: 'absolute', right: 24 }}>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </Container>
  </header>
);

export default Header;
