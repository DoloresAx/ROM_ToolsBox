import React from 'react';
import { Button } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ theme, toggleTheme }) => (
  <Button variant={theme === 'dark' ? 'light' : 'dark'} onClick={toggleTheme}>
    {theme === 'dark' ? <FaSun className="me-2" /> : <FaMoon className="me-2" />}
    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
  </Button>
);

export default ThemeToggle;
