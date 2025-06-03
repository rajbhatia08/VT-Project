import React from 'react';
import './style.css'; 
import { useNavigate } from 'react-router-dom';
const Normal = () => {
    const nav=useNavigate();
    const handleClick=()=>{
       nav('/');
    }
  return (
    <div className="container">
      <h1 className="heading">Result: You Are Healthy!</h1>

      <section className="section">
        <h2>The Importance of Mental Health</h2>
        <p>
          Mental health is just as crucial as physical health, and maintaining a healthy mind is essential for overall well-being.
          A healthy mind helps you cope with the stresses of life, work productively, and contribute to your community. Just as you
          prioritize your physical fitness, it is important to take care of your mental health.
        </p>
      </section>

      <section className="section">
        <h2>How to Stay Mentally Healthy</h2>
        <ul>
          <li>Stay active and exercise regularly</li>
          <li>Eat a balanced and nutritious diet</li>
          <li>Get enough sleep and rest</li>
          <li>Stay connected with friends and family</li>
          <li>Engage in hobbies and activities you enjoy</li>
          <li>Practice mindfulness and meditation</li>
          <li>Set realistic goals and prioritize tasks</li>
          <li>Avoid harmful behaviors like excessive alcohol consumption</li>
        </ul>
      </section>

      <section className="section">
        <h2>The Benefits of Being Mentally Healthy</h2>
        <p>
          Maintaining good mental health brings numerous benefits, including improved mood, enhanced productivity, and stronger relationships.
          It helps you handle challenges and changes, reduces the risk of mental health issues, and improves your overall quality of life.
        </p>
      </section>

      <section className="section">
        <h2>Tips for Staying Mentally Healthy</h2>
        <ul>
          <li>Practice gratitude and focus on the positives</li>
          <li>Learn to manage stress effectively</li>
          <li>Seek professional help if you need it</li>
          <li>Limit screen time and engage in physical activities</li>
          <li>Volunteer or help others to boost your mood and self-esteem</li>
          <li>Keep a journal to reflect on your thoughts and feelings</li>
          <li>Stay informed but avoid excessive exposure to negative news</li>
        </ul>
      </section>
      <div className='btn'>
      <button  className="button" onClick={handleClick}>Go Back!</button>
      </div>
    </div>
  );
};

export default Normal;
