// import FloatingButtons from './components/FloatingButtons';
// import React, { useState } from 'react';
// import Header from './components/Header';
// import SearchBar from './components/SearchBar';
// import ChatGrid from './components/ChatGrid';
// import './App.css';


// function App() {
//   const [theme, setTheme] = useState('light');
//   const [search, setSearch] = useState('');
//   const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

//   return (
//     <div className={theme === 'dark' ? 'bg-dark text-light min-vh-100' : 'bg-light text-dark min-vh-100'}>
//       <Header theme={theme} toggleTheme={toggleTheme} />
//       <div className="container mt-4">
//         <SearchBar value={search} onChange={e => setSearch(e.target.value)} />
//         <ChatGrid theme={theme} filter={search} />
//       </div>
//       <FloatingButtons />
//     </div>
//   );
// }

// export default App;

// App.js
import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import FloatingButtons from './components/FloatingButtons';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ChatGrid from './components/ChatGrid';
import ContributorsPage from './components/ContributorsPage';

import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [search, setSearch] = useState('');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <HashRouter>
      <div className={theme === 'dark' ? 'bg-dark text-light min-vh-100' : 'bg-light text-dark min-vh-100'}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <div className="container mt-4">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchBar value={search} onChange={e => setSearch(e.target.value)} />
                  <ChatGrid theme={theme} filter={search} />
                </>
              }
            />
            <Route path="/contributors" element={<ContributorsPage />} />
          </Routes>
        </div>
        <FloatingButtons />
      </div>
    </HashRouter>
  );
}

export default App;
