import "./NewExpense.css";

import { ExpenseFrom } from "./ExpenseForm";

export const NewExpense = ({ onAddExpense }) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};
