import React from 'react';
import './style.css'; 
import { useNavigate } from 'react-router-dom';
const Stress = () => {
    const nav=useNavigate();
    const handleClick=()=>{
       nav('/');
    }
  return (
    <div className="container">
      <h1 className="heading">Result: Stress</h1>

      <section className="section">
        <h2>What is Stress?</h2>
        <p>
        Stress can be defined as a state of worry or mental tension caused by a difficult situation. Stress is a natural human response that prompts us to address challenges and threats in our lives. Everyone experiences stress to some degree. The way we respond to stress, however, makes a big difference to our overall well-being.
        </p>
      </section>

      <section className="section">
        <h2>How Does Stress Affect Us?</h2>
        <p>
        Stress affects both the mind and the body. A little bit of stress is good and can help us perform daily activities. Too much stress can cause physical and mental health problems. Learning how to cope with stress can help us feel less overwhelmed and support our mental and physical well-being.
        </p>
      </section>

      <section className="section">
        <h2>Signs of Stress</h2>
        <ul>
          <li>Stress makes it difficult to relax.</li>
          <li>It can cause anxiety, irritability, and mood swings.</li>
          <li>Leads to concentration issues.</li>
          <li>May result in headaches, body pains, stomach problems, and trouble sleeping.</li>
          <li>Affects eating habits, causing loss of appetite or overeating.</li>
          <li>Can worsen existing health problems.</li>
          <li>May increase the use of alcohol, tobacco, and other substances.</li>
          <li>Exacerbates mental health issues like anxiety and depression.</li>
          <li>Requires access to healthcare for persistent symptoms.</li>
          <li>Affects daily functioning at work or school.</li>
        </ul>
      </section>

      <section className="section">
        <h2>How Can I Manage Stress?</h2>
        <ul>
        <li> <b>Learn Stress Management:</b> Use WHO’s stress management guide, "Doing what matters in times of stress," to practice self-help techniques for a few minutes daily. Use it alone or with audio exercises.</li>

        <li><b>Keep a Daily Routine:</b> Establish a schedule for meals, family time, exercise, chores, and recreational activities to feel more in control.</li>

        <li><b>Get Plenty of Sleep:</b> Ensure consistent sleep patterns, a quiet and comfortable sleeping area, and limit electronic devices and large meals before bed. Regular exercise helps with better sleep.</li>

        <li><b>Connect with Others:</b> Maintain relationships with family and friends, and share concerns to improve mood and reduce stress.</li>

        <li> <b>Eat Healthy:</b> Consume a balanced diet with regular meals, plenty of fluids, and fresh fruits and vegetables.</li>

        <li> <b>Exercise Regularly:</b> Engage in daily physical activities like walking or more intensive exercise to alleviate stress.</li>

<li><b>Limit News Exposure:</b> Reduce time spent on news and social media if it heightens stress.</li>
        </ul>
      </section>
      <div className='btn'>
      <button  className="button" onClick={handleClick}>Go Back!</button>
      </div>
    </div>
  );
};

export default Stress;
