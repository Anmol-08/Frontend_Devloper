import React, { useState, useEffect } from 'react';
import './DataGrid.css';

const DataGrid = () => {
  const [data, setData] = useState([]);
  
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
                <button >View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default DataGrid;
