import React, { useState } from 'react';
import axios from 'axios';
import './LandingPage.scss';  
import FinancialTable from './FinancialTable/FinancialTable';
import FIREChart from './FIREChart/FIREChart';

function Home() {

  const [age, setAge] = useState(35);
  const [annualIncome, setAnnualIncome] = useState(80000);
  const [annualExpenses, setAnnualExpenses] = useState(30000);
  const [currentNetWorth, setCurrentNetWorth] = useState(20000);
  const [expectedRateOfReturn, setExpectedRateOfReturn] = useState(3);
  const [results, setResults] = useState(null);  
  
  const [visualData, setVisualData] = useState([]);

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
      console.log("Received data from server:", response.data);
      setResults(response.data);
      setVisualData(response.data.yearlyData);
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
      <FinancialTable data={visualData} />
      <FIREChart data={visualData} />    
     
      <button onClick={() => window.location.href='/tips'}>Savings Tips</button>
    </div>
  );
}

export default Home;
