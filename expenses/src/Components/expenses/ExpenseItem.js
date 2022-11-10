import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const clickHandler = () => {
    setTitle("New Title");
    console.log(title);
  };
return (
  <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.price} €</div>
      </div>
      <button onClick={clickHandler}>Update Title</button>
    </Card>
  );
}
