import React from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

function NewExpense(props) {
  const getNewExpenseData = (data) => {
    const newExpense = {
      ...data,
      id: Math.random().toString(),
    };
    props.onSaveNewExpense(newExpense);
  };
  return (
    <div className="new-expense">
      <NewExpenseForm onGetNewExpenseData={getNewExpenseData} />
    </div>
  );
}

export default NewExpense;