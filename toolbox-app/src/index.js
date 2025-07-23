// Import React core library
import React from 'react';
// Import ReactDOM for rendering React components to the DOM
import ReactDOM from 'react-dom/client';
// Import global CSS styles
import './index.css';
// Import the main App component
import App from './App';
// Import performance measuring utility (optional)
import reportWebVitals from './reportWebVitals';
// Import Bootstrap CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';

// Create a root element for rendering the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside React.StrictMode for highlighting potential problems
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure app performance (optional)
// To log results, pass a function like reportWebVitals(console.log)
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
