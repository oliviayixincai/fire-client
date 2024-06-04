import React from 'react';
import './SavingsTips.scss';

const SavingsTips = () => {
    const savingsData = [
        { expense: "New Pair of Shoes", oneYear: "$100", tenYears: "$100", byRetirement: "$100" },
        { expense: "Make Coffee at Home", oneYear: "$650", tenYears: "$650", byRetirement: "$650" },
        { expense: "Drink One Less Cocktail Weekly", oneYear: "$520", tenYears: "$520", byRetirement: "$520" },
        { expense: "New iPhone", oneYear: "$800", tenYears: "$800", byRetirement: "$800" },
        { expense: "Fly with Travel Rewards Card", oneYear: "$1,000", tenYears: "$1k", byRetirement: "$1k" },
        { expense: "No Car Payments", oneYear: "$4,200", tenYears: "$4.2k", byRetirement: "$4.2k" },
    ];

    return (
        <div className="savings-tips-container">
            <h2>Small Changes, Big Savings</h2>
            <table className="savings-tips-table">
                <thead>
                    <tr>
                        <th>Expense</th>
                        <th>1 Year</th>
                        <th>After 10 Years</th>
                        <th>By Retirement</th>
                    </tr>
                </thead>
                <tbody>
                    {savingsData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.expense}</td>
                            <td>{item.oneYear}</td>
                            <td>{item.tenYears}</td>
                            <td>{item.byRetirement}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SavingsTips;
