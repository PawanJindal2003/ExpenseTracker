import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [addNewExpense, setAddNewExpense] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };
  const addNewExpenseHandler = () => {
    setAddNewExpense(true);
  };
  const stopAddNewExpenseHandler = () => {
    setAddNewExpense(false);
  };
  return (
    <div className="new-expense">
      {!addNewExpense && (
        <button type="add-new-expense" onClick={addNewExpenseHandler}>
          Add New Expense
        </button>
      )}
      {addNewExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopAddNewExpenseHandler}
        ></ExpenseForm>
      )}
      {/* onSaveExpenseData is an event listner made 
      by us to store data provided by user in into expenses
       array present in app.js  */}
    </div>
  );
};

export default NewExpense;
