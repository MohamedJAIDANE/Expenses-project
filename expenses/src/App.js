
import Expenses from "./Components/expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      date: new Date(2022, 10, 4),
      title: "New PC",
      price: 2500,
    },
    {
      id: "e2",
      date: new Date(2022, 11, 5),
      title: "Education",
      price: 1000,
    },
    {
      id: "e3",
      date: new Date(2022, 12, 6),
      title: "Voyage",
      price: 3000,
    },
    {
      id: "e4",
      date: new Date(2022, 1, 7),
      title: "Extra",
      price: 4000,
    },
  ];
  return (
    <div>
      <NewExpense/>
     <Expenses expenses={expenses} />
     
    </div>
  );
}

export default App;
