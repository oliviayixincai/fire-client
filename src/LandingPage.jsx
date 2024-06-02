import React, { useState } from 'react';
import axios from 'axios';
import './LandingPage.scss';  // Make sure to import the SCSS for styling

function Home() {
  // State for each input field
  const [age, setAge] = useState('');
  const [annualIncome, setAnnualIncome] = useState('');
  const [annualExpenses, setAnnualExpenses] = useState('');
  const [currentNetWorth, setCurrentNetWorth] = useState('');
  const [expectedRateOfReturn, setExpectedRateOfReturn] = useState('');
  const [results, setResults] = useState(null);  

  const inflationRate = "3%";

  const handleCalculate = async (event) => {
    event.preventDefault();
    const payload = {
      age: parseInt(age, 10),
      annualIncome: parseFloat(annualIncome),
      annualExpenses: parseFloat(annualExpenses),
      currentNetWorth: parseFloat(currentNetWorth),
      expectedRateOfReturn: parseFloat(expectedRateOfReturn)
    };

    try {
      const response = await axios.post('http://localhost:3001/calculate', payload);
      setResults(response.data); 
    } catch (error) {
      console.error('Error performing the calculation:', error);
      alert('Calculation failed: ' + (error.response ? error.response.data.error : error.message));
    }
  };

  return (
    <div className="container">
      <h1 className="title">FIRE Calculator</h1>
      <form onSubmit={handleCalculate} className="form">
        <div className="input-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={e => setAge(e.target.value)}
            placeholder="Enter your age"
          />
        </div>
        <div className="input-group">
          <label htmlFor="annualIncome">Annual Income:</label>
          <input
            type="number"
            id="annualIncome"
            value={annualIncome}
            onChange={e => setAnnualIncome(e.target.value)}
            placeholder="Enter your annual income"
          />
        </div>
        <div className="input-group">
          <label htmlFor="annualExpenses">Annual Expenses:</label>
          <input
            type="number"
            id="annualExpenses"
            value={annualExpenses}
            onChange={e => setAnnualExpenses(e.target.value)}
            placeholder="Enter your annual expenses"
          />
        </div>
        <div className="input-group">
          <label htmlFor="currentNetWorth">Current Net Worth:</label>
          <input
            type="number"
            id="currentNetWorth"
            value={currentNetWorth}
            onChange={e => setCurrentNetWorth(e.target.value)}
            placeholder="Enter your current net worth"
          />
        </div>
        <div className="input-group">
          <label htmlFor="expectedRateOfReturn">Expected Rate of Return (%):</label>
          <input
            type="number"
            id="expectedRateOfReturn"
            value={expectedRateOfReturn}
            onChange={e => setExpectedRateOfReturn(e.target.value)}
            placeholder="Enter expected rate of return"
          />
          <div className="input-group">
            <label>Inflation Rate Used in Calculations:</label>
            <span className="inflation-rate">{inflationRate}</span>
          </div>
        </div>
        <button type="submit" className="submit-btn">Calculate</button>
      </form>
      {results && (
        <div className="results">
          <p>Years until financial independence: {results.yearsToFI}</p>
          <p>Age at financial independence: {results.ageAtFI}</p>
          <p>Required savings: {results.requiredSavings}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
