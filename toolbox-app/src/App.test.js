// Import testing utilities from React Testing Library
import { render, screen } from '@testing-library/react';
// Import the main App component to test
import App from './App';

// Basic test to check if the "learn react" link is rendered
test('renders learn react link', () => {
  render(<App />); // Render the App component
  // Look for an element with text matching "learn react" (case-insensitive)
  const linkElement = screen.getByText(/learn react/i);
  // Assert that the element is present in the document
  expect(linkElement).toBeInTheDocument();
});
