import React from 'react';
import './style.css'; 
import { useNavigate } from 'react-router-dom';
const Anxiety = () => {
    const nav=useNavigate();
    const handleClick=()=>{
       nav('/');
    }
  return (
    <div className="container">
      <h1 className="heading">Result: Anxiety</h1>

      <section className="section">
        <h2>What is Anxiety?</h2>
        <p>
          Anxiety is a feeling of worry, nervousness, or unease about something with an uncertain outcome. It is a normal
          reaction to stress and can be beneficial in some situations. However, excessive anxiety can interfere with daily
          activities and may indicate an anxiety disorder.
        </p>
      </section>

      <section className="section">
        <h2>How Does Anxiety Affect Us?</h2>
        <p>
          Anxiety affects our body and mind. It can cause physical symptoms such as a racing heart, sweating, and fatigue,
          as well as mental symptoms like excessive worry, fear, and difficulty concentrating. Long-term anxiety can lead
          to serious health issues including heart problems, high blood pressure, and mental health disorders like depression.
        </p>
      </section>

      <section className="section">
        <h2>Signs of Anxiety</h2>
        <ul>
          <li>Persistent worry or fear</li>
          <li>Feeling restless or on edge</li>
          <li>Difficulty concentrating</li>
          <li>Increased heart rate</li>
          <li>Muscle tension</li>
          <li>Sleep disturbances</li>
          <li>Avoidance of certain situations</li>
        </ul>
      </section>

      <section className="section">
        <h2>How Can I Manage Anxiety?</h2>
        <ul>
          <li>Engage in regular physical activity to reduce anxiety</li>
          <li>Practice mindfulness or relaxation techniques</li>
          <li>Limit caffeine and alcohol intake</li>
          <li>Establish a consistent sleep routine</li>
          <li>Stay connected with supportive friends and family</li>
          <li>Set realistic goals and break tasks into manageable steps</li>
          <li>Seek professional help if anxiety interferes with daily life</li>
        </ul>
      </section>
      <div className='btn'>
      <button  className="button" onClick={handleClick}>Go Back!</button>
    </div>
    </div>
  );
};

export default Anxiety;
