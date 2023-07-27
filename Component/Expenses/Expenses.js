import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* ternary operator */}
        {/* {condition?if true then do this : else do this} */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses in this year.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        {/* Abusive way */}
        {/* {If this is true && then run this} */}
        {/* {filteredExpenses.length === 0 && <p>No expenses in this year.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        {/* <ExpenseItem expense={props.items[0]}></ExpenseItem>
        <ExpenseItem expense={props.items[1]}></ExpenseItem>
        <ExpenseItem expense={props.items[2]}></ExpenseItem>
        <ExpenseItem expense={props.items[3]}></ExpenseItem> */}
      </Card>
    </div>
  );
}
export default Expenses;
