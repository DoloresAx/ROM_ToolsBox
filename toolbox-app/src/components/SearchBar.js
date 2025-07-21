import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ value, onChange }) => (
  <InputGroup className="mb-4">
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
