import { useState } from "react";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpenesesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [year, setYear] = useState("2020");

  const getYearHandler = (selectedYear) => {
    console.log("Expenese.js");
    setYear((curYear) => selectedYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={year} onGetYear={getYearHandler} />
        <ExpensesChart expenses={filterExpenses} />
        <ExpenesesList items={filterExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
