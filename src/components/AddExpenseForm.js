import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    if (!name || !cost.replace(/\D/g, "")) {
      return;
    }

    if (
      isNaN(parseInt(cost.replace(/\D/g, ""))) ||
      parseInt(cost.replace(/\D/g, "")) < 0
    ) {
      return;
    }

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost.replace(/\D/g, "")),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor="my_modal_6"
        className="btn btn-secondary hover:btn-secondary-focus text-accent-content"
      >
        Add Expense
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form onSubmit={onSubmit}>
            <div className="form-control mb-4">
              <span>Name</span>
              <input
                type="text"
                placeholder="type of expense"
                className="input input-bordered"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="form-control">
              <span>Cost</span>
              <input
                type="text"
                placeholder="100"
                className="input input-bordered"
                id="cost"
                value={cost}
                onChange={(event) => setCost(event.target.value)}
              />
            </div>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button type="submit" className="">
                <label
                  htmlFor="my_modal_6"
                  className="btn btn-success text-accent-content"
                >
                  Save
                </label>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddExpenseForm;
