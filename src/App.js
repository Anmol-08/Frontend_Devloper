import './App.css';
import React, { useEffect, useState } from 'react';
import { fetchAllRocketDetails } from './services/rocketService.js';
import { fetchAllCapsuleDetails } from './services/capsuleService.js';
import Banner from './Components/Banner/Banner';
import SearchForm from './Components/SearchForm/SearchForm';
import DataGrid from './Components/DataGrid/DataGrid';
import Modal from './Components/Modal/Modal';

function App() {
  const [rockets, setRockets] = useState([]);
  const [capsules, setCapsules] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchExecuted, setSearchExecuted] = useState(false);

  const queryParams = {};

  useEffect(() => {
    fetchAllRocketDetails()
      .then((data) => {
        setRockets(data);
      })
      .catch((error) => {
        console.error('Error fetching rockets:', error);
      });
  
    fetchAllCapsuleDetails()
      .then((data) => {
        setCapsules(data);
      })
      .catch((error) => {
        console.error('Error fetching capsules:', error);
      });
  }, []); 

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSearch = (searchCriteria) => {
    const filteredRockets = rockets.filter((rocket) => {
      const nameMatch = rocket.name?.toLowerCase().includes(searchCriteria.toLowerCase());
      return nameMatch;
    });
  
    const filteredCapsules = capsules.filter((capsule) => {
      const nameMatch = capsule.name?.toLowerCase().includes(searchCriteria.toLowerCase());
      return nameMatch;
    });

    const combinedResults = [...filteredRockets, ...filteredCapsules];
  
    setFilteredItems(combinedResults);
    setSearchExecuted(true); 
  };

  return (
    <div className="App">
      <Banner />
      <SearchForm onSearch={handleSearch} />
      {searchExecuted && filteredItems.length === 0 ? (
        <p>No items match the search criteria.</p>
      ) : (
        filteredItems.length > 0 && (
          <DataGrid data={filteredItems} onItemClick={handleItemClick} />
        )
      )}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleModalClose} item={selectedItem} queryParams={queryParams} />
      )}
    </div>
  );
}


export default App;
