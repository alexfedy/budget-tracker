import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  return (
    <div className="bg-base-200 p-4 rounded text-base-content">
      <p className="">Remaining</p>
      <p className="text-2xl font-medium tracking-tighter">
        ${(budget - totalExpenses).toLocaleString("en-US")}
      </p>
    </div>
  );
};

export default Remaining;
