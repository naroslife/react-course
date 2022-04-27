import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  let rows = [];
  props.expenses.forEach((expense) => {
    rows.push(
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });
  return <div className="expenses">{rows}</div>;
}

export default Expenses;
