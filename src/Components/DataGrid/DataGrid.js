import React from 'react';
import './DataGrid.css';

const DataGrid = ({ data, onItemClick }) => {
  return (
    <div className="data-grid-container">
      <div className="data-grid">
        {data.map((item) => (
          <div className="data-card" key={item.id} onClick={() => onItemClick(item)}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button className="action-button">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataGrid;
