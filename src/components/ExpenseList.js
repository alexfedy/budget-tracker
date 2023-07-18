import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <>
      <div className="flex flex-col gap-2">
        {expenses.map((expense, i) => (
          <ExpenseItem
            key={i}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </div>
    </>
  );
};

export default ExpenseList;
