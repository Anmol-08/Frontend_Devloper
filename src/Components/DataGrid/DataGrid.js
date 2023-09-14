import React, { useState, useEffect } from 'react';
import './DataGrid.css'; 
import Modal from '../Modal/Modal'; 

const DataGrid = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  useEffect(() => {
    const mockData = [
      { id: 1, name: 'Rocket 1', description: 'Description of Rocket 1' },
      { id: 2, name: 'Rocket 2', description: 'Description of Rocket 2' },
    ];

    setData(mockData);
  }, []);

  return (
    <div className="data-grid">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => openModal(item)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedItem && <Modal item={selectedItem} onClose={closeModal} />}
    </div>
  );
};

export default DataGrid;
