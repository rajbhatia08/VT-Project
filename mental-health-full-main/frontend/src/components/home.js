import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Form = () => {
  const [formData, setFormData] = useState({
    feeling_nervous: 0,
    panic: 0,
    breathing_rapidly: 0,
    sweating: 0,
    trouble_in_concentration: 0,
    having_trouble_in_sleeping: 0,
    having_trouble_with_work: 0,
    hopelessness: 0,
    anger: 0,
    over_react: 0,
    change_in_eating: 0,
    suicidal_thought: 0,
    feeling_tired: 0,
    close_friend: 0,
    social_media_addiction: 0,
    weight_gain: 0,
    material_possessions: 0,
    introvert: 0,
    popping_up_stressful_memory: 0,
    having_nightmares: 0,
    avoids_people_or_activities: 0,
    feeling_negative: 0,
    trouble_concentrating: 0,
    blamming_yourself: 0,
  });

  const [result, setResult] = useState(null);
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://mental-health-full-1.onrender.com/predict/', formData);
      setResult(response.data.message);
      console.log(response.data.message)
      navigateToPage(response.data.message); 
      console.log({result})
    } catch (error) {
      console.error('Error submitting form:', error);
      setResult('Error submitting form');
    }
  };

  const navigateToPage = (result) => {
    
    switch(result) {
      case 0:
        navigate('/normal');  
        break;
      case 1:
        navigate('/anxiety'); 
        break;
      case 2:
        navigate('/depression'); 
        break;
      case 3:
        navigate('/loneliness'); 
        break;
      case 4:
        navigate('/stress');
        break;
      default:
        console.error('Invalid result');
    }
  };

  useEffect(() => {
    const formContainer = document.querySelector('.form-container');
    formContainer.classList.add('pop-up');
  }, []);

  return (
    <>
      <header className="page-header">
        <h1>Welcome to Mental Health Predictor</h1>
      </header>

      <div className="form-container">
        <p className='para'><b>Kindly answer the following questions!</b>
        </p>
        <div className='inst'>
       <span> For "Yes" enter : 1 </span>
       <span> For "No" enter : 0 </span>
       </div>  
        


        <form onSubmit={handleSubmit} className="form">
          {Object.keys(formData).map((key) => (
            <div key={key} className="form-question">
              <label>
                {key.replace(/_/g, ' ')}:
                <input
                  type="number"
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  min="0"
                  max="1"
                />
              </label>
            </div>
          ))}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;

