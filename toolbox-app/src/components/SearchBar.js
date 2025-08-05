

// export default SearchBar;

import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css'; // Import the custom CSS

const SearchBar = ({ value, onChange }) => (
  <InputGroup className="mb-4 custom-search-group">
    <FormControl
      placeholder="Search..."
      aria-label="Search"
      value={value}
      onChange={onChange}
    />
    <Button variant="primary">
      <FaSearch />
    </Button>
  </InputGroup>
);

export default SearchBar;
