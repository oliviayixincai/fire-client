import React from 'react';
import './FinancialTable.scss';

function FinancialTable({ data }) {
    
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
                {data.map((data, index) => (
                    <tr key={index}>
                        <td>{data.age}</td>
                        <td>{index}</td>
                        <td>${data.annualIncome.toLocaleString()}</td>
                        <td>${data.annualSavings.toLocaleString()}</td>
                        <td>${data.netWorth.toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default FinancialTable;
