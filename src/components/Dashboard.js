import React from "react";
import Budget from "./Budget";
import Remaining from "../components/Remaining";
import ExpenseTotal from "../components/ExpenseTotal";
import ExpenseList from "../components/ExpenseList";
import AddExpenseForm from "../components/AddExpenseForm";
import { AppProvider } from "../context/AppContext";
import Chart from "./Chart";
import Title from "./Title";
import { motion } from "framer-motion";

const App = () => {
  return (
    <AppProvider>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="container pt-12"
      >
        <Title />
        <div className="flex flex-wrap md:flex-row mt-8 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-[250px]"
          >
            <Budget />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-[250px]"
          >
            <ExpenseTotal />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-[250px]"
          >
            <Remaining />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="">
            <div className="mt-12 flex flex-col md:flex-row md:items-center gap-8 items-start">
              <h3 className="text-2xl tracking-tight font-medium">Expenses</h3>
              <AddExpenseForm />
            </div>
            <div className="row mt-3">
              <div className="col-sm">
                <ExpenseList />
              </div>
            </div>
          </div>
          <div>
            <Chart />
          </div>
        </motion.div>
      </motion.div>
    </AppProvider>
  );
};

export default App;
