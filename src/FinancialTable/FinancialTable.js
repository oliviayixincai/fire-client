import React from 'react';
import './FinancialTable.scss';

function FinancialTable({ data }) {
    // Check if data is defined and is an array with length
    if (!data || !Array.isArray(data) || data.length === 0) {
        return <p>No data available. Please submit the form to calculate.</p>;
    }

    return (
        <table className="financial-table">
            <thead>
                <tr>
                    <th>Age</th>
                    <th>Years Elapsed</th>
                    <th>Annual Income</th>
                    <th>Annual Savings</th>
                    <th>Net Worth</th>
                </tr>
            </thead>
            <tbody>
                {data.map((year, index) => (
                    <tr key={index}>
                        <td>{year.age}</td>
                        <td>{index}</td>
                        <td>${year.annualIncome.toLocaleString()}</td>
                        <td>${year.annualSavings.toLocaleString()}</td>
                        <td>${year.netWorth.toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default FinancialTable;
