import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <div className="p-4 flex rounded shadow-md justify-between items-center">
      <div className="lg:flex items-center">
        <div className="w-auto md:w-[200px]">
          <p className="text-sm text-gray-500 font-light mb-2">Type</p>
          <p className="text-lg">{props.name}</p>
        </div>
        <div className="w-auto md:w-[150px]">
          <p className="text-sm text-gray-500 font-light mb-2">Cost</p>
          <p className="text-lg badge badge-neutral text-neutral-content p-4">
            ${props.cost.toLocaleString("en-US")}
          </p>
        </div>
      </div>
      <button className="cursor-pointer" onClick={handleDeleteExpense}>
        &#10006;
      </button>
    </div>
  );
};

export default ExpenseItem;
