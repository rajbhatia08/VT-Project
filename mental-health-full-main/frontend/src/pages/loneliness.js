import React from 'react';
import './style.css'; 
import { useNavigate } from 'react-router-dom';
const Loneliness = () => {
    const nav=useNavigate();
    const handleClick=()=>{
       nav('/');
    }
  return (
    <div className="container">
      <h1 className="heading">Result: Loneliness</h1>

      <section className="section">
        <h2>What is Loneliness?</h2>
        <p>
          Loneliness is the feeling of being alone, regardless of the amount of social contact. It is a feeling of being disconnected from others, 
          which can lead to feelings of isolation and sadness.
        </p>
      </section>

      <section className="section">
        <h2>How Does Loneliness Affect Us?</h2>
        <p>
          Loneliness can have significant impacts on mental and physical health. It can lead to increased stress, depression, and anxiety. 
          Chronic loneliness can also affect cardiovascular health and immune function.
        </p>
      </section>

      <section className="section">
        <h2>Signs of Loneliness</h2>
        <ul>
          <li>Feeling disconnected from others</li>
          <li>Feeling sad and empty</li>
          <li>Having few or no close friends</li>
          <li>Spending a lot of time alone</li>
          <li>Feeling that no one understands you</li>
          <li>Experiencing social anxiety</li>
          <li>Having difficulty forming and maintaining relationships</li>
        </ul>
      </section>

      <section className="section">
        <h2>How Can I Manage Loneliness?</h2>
        <ul>
          <li>Reach out to friends and family</li>
          <li>Engage in social activities or join clubs</li>
          <li>Volunteer for causes you care about</li>
          <li>Adopt a pet for companionship</li>
          <li>Practice self-compassion and mindfulness</li>
          <li>Seek professional help if loneliness persists</li>
          <li>Use technology to stay connected with loved ones</li>
        </ul>
      </section>
      <div className='btn'>
      <button  className="button" onClick={handleClick}>Go Back!</button>
    </div>
    </div>
  );
};

export default Loneliness;

