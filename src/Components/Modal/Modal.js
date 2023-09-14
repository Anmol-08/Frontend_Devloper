import React from 'react';
import './Modal.css'; 

const Modal = ({ item, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <h2>Item Details</h2>
        <div className="modal-content">
          <p>ID: {item.id}</p>
          <p>Name: {item.name}</p>
          <p>Description: {item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
