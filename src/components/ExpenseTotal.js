import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div className="bg-base-200 p-4 rounded text-base-content">
      <p className="">Expenses</p>
      <p className="text-2xl font-medium tracking-tighter">
        ${totalExpenses.toLocaleString("en-US")}
      </p>
    </div>
  );
};

export default ExpenseTotal;
