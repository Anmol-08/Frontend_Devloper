import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ onSearch }) => {
  const [searchCriteria, setSearchCriteria] = useState('');

  const handleInputChange = (event) => {
    setSearchCriteria(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    if (searchCriteria.trim() !== '') {
      onSearch(searchCriteria);
    } else {
      alert('Please enter a search term.');
    }
  };

  return (
    <div className="search-form" id='search-bar'>
      <form onSubmit={handleSubmit}>
        <div className="filter">
          <label>Search:</label>
          <input
            type="text"
            name="search"
            placeholder="Search for rockets, capsules, etc..."
            value={searchCriteria}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
