import React from 'react';
import './style.css'; 
import { useNavigate } from 'react-router-dom';
const Depression = () => {
    const nav=useNavigate();
    const handleClick=()=>{
       nav('/');
    }
  return (
    <div className="container">
      <h1 className="heading">Result: Depression</h1>

      <section className="section">
        <h2>What is Depression?</h2>
        <p>
          Depression is a common and serious medical illness that negatively affects how you feel, the way you think, and
          how you act. It causes feelings of sadness and/or a loss of interest in activities once enjoyed. It can lead to
          a variety of emotional and physical problems and can decrease your ability to function at work and at home.
        </p>
      </section>

      <section className="section">
        <h2>How Does Depression Affect Us?</h2>
        <p>
          Depression affects both the body and the mind. It can lead to various emotional issues, such as feelings of
          sadness, emptiness, or hopelessness. It can also cause physical symptoms like changes in appetite and sleep
          patterns, fatigue, and decreased energy. Severe cases of depression may even lead to thoughts of self-harm or
          suicide.
        </p>
      </section>

      <section className="section">
        <h2>Signs of Depression</h2>
        <ul>
          <li>Persistent feelings of sadness or hopelessness</li>
          <li>Loss of interest in previously enjoyable activities</li>
          <li>Changes in appetite or weight</li>
          <li>Sleep disturbances (insomnia or excessive sleeping)</li>
          <li>Fatigue and loss of energy</li>
          <li>Difficulty concentrating or making decisions</li>
          <li>Feelings of worthlessness or excessive guilt</li>
          <li>Thoughts of death or suicide</li>
        </ul>
      </section>

      <section className="section">
        <h2>How Can I Manage Depression?</h2>
        <ul>
          <li>Seek professional help from a therapist or counselor</li>
          <li>Engage in regular physical exercise</li>
          <li>Maintain a balanced and healthy diet</li>
          <li>Build a strong support network of friends and family</li>
          <li>Practice mindfulness or meditation to reduce stress</li>
          <li>Avoid alcohol and drugs</li>
          <li>Set realistic goals and take small steps towards achieving them</li>
        </ul>
      </section>
      <div className='btn'>
      <button  className="button" onClick={handleClick}>Go Back!</button>
    </div></div>
  );
};

export default Depression;
