import { ExpenseItem } from "./ExpenseItem";
import "./ExpensesList.css";

export const ExpensesList = ({ items }) => {
    if (items.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found.</h2>;
    }

    return (
        <ul className="expenses-list">
            {items.map((item) => {
                return (
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                );
            })}
        </ul>
    );
};
