import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ onSearch }) => {
  const [searchCriteria, setSearchCriteria] = useState('');

  const handleInputChange = (event) => {
    setSearchCriteria(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchCriteria);
  };

  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search SpaceX Data..."
          value={searchCriteria}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
