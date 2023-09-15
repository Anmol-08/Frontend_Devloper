import React from 'react';
import './Modal.css';

const Modal = ({ item, onClose, queryParams }) => {
  const showId = queryParams.id === 'true';

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <h1>Rocket Details: {item.name}</h1>
        {showId && <p>ID: {item.id}</p>}
        <div className="modal-content">
          <p>Description: {item.description}</p>
          <p>Active: {item.active ? 'Yes' : 'No'}</p>
          <p>Stages: {item.stages}</p>
          <p>Boosters: {item.boosters}</p>
          <p>Cost per Launch: ${item.cost_per_launch}</p>
          <p>Success Rate: {item.success_rate_pct}%</p>
          <p>First Flight: {item.first_flight}</p>
          <p>Country: {item.country}</p>
          <p>Company: {item.company}</p>
          <p>Height (meters): {item.height.meters}</p>
          <p>Height (feet): {item.height.feet}</p>
          <p>Diameter (meters): {item.diameter.meters}</p>
          <p>Diameter (feet): {item.diameter.feet}</p>
          <p>Mass (kg): {item.mass.kg}</p>
          <p>Mass (lb): {item.mass.lb}</p>
          <p>Payload Weights:</p>
          <ul>
            {item.payload_weights.map((payload, index) => (
              <li key={index}>
                {payload.name}: {payload.kg} kg, {payload.lb} lb
              </li>
            ))}
          </ul>
          <p>First Stage:</p>
          <ul>
            <li>Reusable: {item.first_stage.reusable ? 'Yes' : 'No'}</li>
            <li>Engines: {item.first_stage.engines}</li>
            <li>Fuel Amount (tons): {item.first_stage.fuel_amount_tons}</li>
            <li>Burn Time (sec): {item.first_stage.burn_time_sec}</li>
            <li>Thrust Sea Level (kN): {item.first_stage.thrust_sea_level.kN}</li>
            <li>Thrust Sea Level (lbf): {item.first_stage.thrust_sea_level.lbf}</li>
            <li>Thrust Vacuum (kN): {item.first_stage.thrust_vacuum.kN}</li>
            <li>Thrust Vacuum (lbf): {item.first_stage.thrust_vacuum.lbf}</li>
          </ul>
          <p>Second Stage:</p>
          <ul>
            <li>Engines: {item.second_stage.engines}</li>
            <li>Fuel Amount (tons): {item.second_stage.fuel_amount_tons}</li>
            <li>Burn Time (sec): {item.second_stage.burn_time_sec}</li>
            <li>Thrust (kN): {item.second_stage.thrust.kN}</li>
            <li>Thrust (lbf): {item.second_stage.thrust.lbf}</li>
            <li>Payloads:</li>
            <ul>
              <li>Option 1: {item.second_stage.payloads.option_1}</li>
              <li>Option 2: {item.second_stage.payloads.option_2}</li>
              <li>Composite Fairing:</li>
              <ul>
                <li>Height (meters): {item.second_stage.payloads.composite_fairing.height.meters}</li>
                <li>Height (feet): {item.second_stage.payloads.composite_fairing.height.feet}</li>
                <li>Diameter (meters): {item.second_stage.payloads.composite_fairing.diameter.meters}</li>
                <li>Diameter (feet): {item.second_stage.payloads.composite_fairing.diameter.feet}</li>
              </ul>
            </ul>
          </ul>
          <p>Engines:</p>
          <ul>
            <li>Number: {item.engines.number}</li>
            <li>Type: {item.engines.type}</li>
            <li>Version: {item.engines.version}</li>
            <li>Layout: {item.engines.layout}</li>
            <li>Engine Loss Max: {item.engines.engine_loss_max}</li>
            <li>Propellant 1: {item.engines.propellant_1}</li>
            <li>Propellant 2: {item.engines.propellant_2}</li>
            <li>Thrust Sea Level (kN): {item.engines.thrust_sea_level.kN}</li>
            <li>Thrust Sea Level (lbf): {item.engines.thrust_sea_level.lbf}</li>
            <li>Thrust Vacuum (kN): {item.engines.thrust_vacuum.kN}</li>
            <li>Thrust Vacuum (lbf): {item.engines.thrust_vacuum.lbf}</li>
            <li>Thrust to Weight: {item.engines.thrust_to_weight}</li>
          </ul>
          <p>Landing Legs:</p>
          <ul>
            <li>Number: {item.landing_legs.number}</li>
            <li>Material: {item.landing_legs.material}</li>
          </ul>
          <p>Wikipedia: <a href={item.wikipedia} target="_blank" rel="noopener noreferrer">Link</a></p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
