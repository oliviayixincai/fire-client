import React from "react";
import Table from 'react-bootstrap/Table';
import Header from "../../components/Header/Header";
import "./SavingsTips.scss";

const SavingsTips = () => {
  const savingsData = [
    {
      expense: "New Pair of Shoes",
      oneYear: "$100",
      tenYears: "$151",
      twentyYears: "$228",
    },
    {
      expense: "Make Coffee at Home",
      oneYear: "$650",
      tenYears: "$983",
      twentyYears: "$1487",
    },
    {
      expense: "Drink One Less Cocktail Weekly",
      oneYear: "$520",
      tenYears: "$786",
      twentyYears: "$1188",
    },
    {
      expense: "New iPhone",
      oneYear: "$800",
      tenYears: "$1200",
      twentyYears: "$1800",
    },
    {
      expense: "Fly with Travel Rewards Card",
      oneYear: "$1,000",
      tenYears: "$1500",
      twentyYears: "$2250",
    },
    {
      expense: "No Car Payments",
      oneYear: "$4,200",
      tenYears: "$6400",
      twentyYears: "$9752",
    },
  ];

  return (
    <>
    <Header showButton={false}/>
    <div className="savings-tips-container">
      <h2>Small Changes, Big Savings</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Expense</th>
            <th>1 Year</th>
            <th>After 10 Years</th>
            <th>After 20 Years</th>
          </tr>
        </thead>
        <tbody>
          {savingsData.map((item, index) => (
            <tr key={index}>
              <td>{item.expense}</td>
              <td>{item.oneYear}</td>
              <td>{item.tenYears}</td>
              <td>{item.twentyYears}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </>
  );
}

export default SavingsTips;
