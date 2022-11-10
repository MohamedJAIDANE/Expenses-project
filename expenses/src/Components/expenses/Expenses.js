import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.expenses[0].date}
        title={props.expenses[0].title}
        price={props.expenses[0].price}
      />
      <ExpenseItem
        date={props.expenses[1].date}
        title={props.expenses[1].title}
        price={props.expenses[1].price}
      />
      <ExpenseItem
        date={props.expenses[2].date}
        title={props.expenses[2].title}
        price={props.expenses[2].price}
      />
      <ExpenseItem
        date={props.expenses[3].date}
        title={props.expenses[3].title}
        price={props.expenses[3].price}
      />
    </Card>
  );
}

export default Expenses;