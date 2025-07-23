// Import main React library and hooks
import React, { useState } from 'react';

// Import custom components
import FloatingButtons from './components/FloatingButtons';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ChatGrid from './components/ChatGrid';

// Import global styles
import './App.css';

/**
 * Main App component.
 * Handles theme switching, search state, and renders the main layout.
 */
function App() {
  // State for theme: 'light' or 'dark'
  const [theme, setTheme] = useState('light');

  // State for search input value
  const [search, setSearch] = useState('');

  // Function to toggle between light and dark themes
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    // Set class based on current theme for background and text color
    <div className={theme === 'dark' ? 'bg-dark text-light min-vh-100' : 'bg-light text-dark min-vh-100'}>
      {/* Header with theme toggle button */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      <div className="container mt-4">
        {/* Search bar for filtering chat grid */}
        <SearchBar value={search} onChange={e => setSearch(e.target.value)} />

        {/* Grid displaying chat items, filtered by search and styled by theme */}
        <ChatGrid theme={theme} filter={search} />
      </div>

      {/* Floating action buttons (e.g., for quick actions) */}
      <FloatingButtons />
    </div>
  );
}

export default App;
