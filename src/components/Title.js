import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Title = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  let remaining = budget - totalExpenses > 0;

  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tighter">Remaining Balance</h1>
      {remaining && (
        <span className="text-4xl font-bold tracking-tighter text-success">
          ${(budget - totalExpenses).toLocaleString("en-US")}
        </span>
      )}
      {!remaining && (
        <span className="text-4xl font-bold tracking-tighter text-error">
          ${(budget - totalExpenses).toLocaleString("en-US")}
        </span>
      )}
    </div>
  );
};

export default Title;
