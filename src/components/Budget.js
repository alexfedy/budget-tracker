import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget } = useContext(AppContext);

  const [newBudget, setNewBudget] = useState(0);

  const { dispatch } = useContext(AppContext);

  const changeBudget = () => {
    dispatch({
      type: "EDIT_BUDGET",
      payload: newBudget,
    });
  };

  const changeInputVal = (e) => {
    let temp_budget = e.target.value.replace(/\D/g, "");
    setNewBudget(temp_budget);
  };

  return (
    <>
      <div className="bg-base-200 p-4 rounded text-base-content">
        <p className="">
          Budget
          <label className="mx-2 underline" htmlFor="my_modal_5">
            Edit
          </label>
        </p>
        <p className="text-2xl font-medium tracking-tighter">
          ${Number(budget).toLocaleString("en-US")}
        </p>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <input
            type="text"
            className="input"
            placeholder="New Budget Value"
            name="budget_value"
            id="budget_value"
            onChange={changeInputVal}
          />
          <div className="modal-action">
            <label htmlFor="my_modal_5" className="btn" onClick={changeBudget}>
              Save
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Budget;
