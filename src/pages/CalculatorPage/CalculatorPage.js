import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../../components/Header/Header";
import CalculatorRightPanel from "../../components/CalculatorRightPanel/CalculatorRightPanel";

import "./CalculatorPage.scss";

const inflationRate = "3%";
const withdrawalRate = "4%";

function CalculatorPage() {
  const [age, setAge] = useState(35);
  const [annualIncome, setAnnualIncome] = useState(80000);
  const [annualExpenses, setAnnualExpenses] = useState(30000);
  const [currentNetWorth, setCurrentNetWorth] = useState(20000);
  const [expectedRateOfReturn, setExpectedRateOfReturn] = useState(3);
  const [results, setResults] = useState();

  const handleCalculate = async (event) => {
    if (event) {
      event.preventDefault();
    }

    const payload = {
      age: parseInt(age, 10),
      annualIncome: parseFloat(annualIncome),
      annualExpenses: parseFloat(annualExpenses),
      currentNetWorth: parseFloat(currentNetWorth),
      expectedRateOfReturn: parseFloat(expectedRateOfReturn),
    };

    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/calculate",
        payload
      );
      setResults(data);
    } catch (error) {
      console.error("Error performing the calculation:", error);
      alert(
        "Calculation failed: " +
          (error.response ? error.response.data.error : error.message)
      );
    }
  };

  useEffect(() => {
    handleCalculate();
  }, []);

  return (
    <>
      <Header />
      <div className="calculator">
        <div className="calculator__left-panel">
          <form onSubmit={handleCalculate} className="form">
            <div className="input-group">
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
              />
            </div>
            <div className="input-group">
              <label htmlFor="annualIncome">Annual Income:</label>
              <input
                type="number"
                id="annualIncome"
                value={annualIncome}
                step="5000"
                onChange={(e) => setAnnualIncome(e.target.value)}
                placeholder="Enter your annual income"
              />
            </div>
            <div className="input-group">
              <label htmlFor="annualExpenses">Annual Expenses:</label>
              <input
                type="number"
                id="annualExpenses"
                value={annualExpenses}
                step="2000"
                onChange={(e) => setAnnualExpenses(e.target.value)}
                placeholder="Enter your annual expenses"
              />
            </div>
            <div className="input-group">
              <label htmlFor="currentNetWorth">Current Net Worth:</label>
              <input
                type="number"
                id="currentNetWorth"
                value={currentNetWorth}
                step="5000"
                onChange={(e) => setCurrentNetWorth(e.target.value)}
                placeholder="Enter your current net worth"
              />
            </div>
            <div className="input-group">
              <label htmlFor="expectedRateOfReturn">
                Expected Rate of Return (%):
              </label>
              <input
                type="number"
                id="expectedRateOfReturn"
                value={expectedRateOfReturn}
                onChange={(e) => setExpectedRateOfReturn(e.target.value)}
                placeholder="Enter expected rate of return"
              />
            </div>
            <div className="input-group">
              <label>Inflation Rate Used in Calculations:</label>
              <span className="inflation-rate">{inflationRate}</span>
            </div>
            <div className="input-group">
              <label>Withdrawal Rate Used in Calculations:</label>
              <span className="inflation-rate">{withdrawalRate}</span>
            </div>
            <button type="submit" className="submit-btn">
              Calculate
            </button>
          </form>
        </div>
        <div className="calculator__right-panel">
          <CalculatorRightPanel results={results} />
        </div>
      </div>
    </>
  );
}

export default CalculatorPage;
