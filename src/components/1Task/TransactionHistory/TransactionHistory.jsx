import React from "react";
import "./TransactionHistory.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="table-container">
      <table className="transaction-table">
        <thead>
          <tr className="header-row">
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(({ id, type, amount, currency }, index) => (
            <tr ket={id} className={index % 2 === 0 ? "even-row" : "odd-row"}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
