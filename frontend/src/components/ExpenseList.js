import React, { useEffect, useState } from "react";
import { getExpenses, updateExpense } from "../services/apiService"; // ✅ Import updateExpense

function ExpenseList() {
    const [expenses, setExpenses] = useState([]); // ✅ Expense list state
    const [editingExpense, setEditingExpense] = useState(null); // ✅ State for editing
    const [updatedExpense, setUpdatedExpense] = useState({ category: "", amount: "", date: "" }); // ✅ State for edit form

    useEffect(() => {
        getExpenses().then(setExpenses);
    }, []);

    // ✅ Function to handle edit button click
    const handleEditClick = (expense) => {
        setEditingExpense(expense);
        setUpdatedExpense({ category: expense.category, amount: expense.amount, date: expense.date });
    };

    // ✅ Function to update expense
    const handleUpdateExpense = async () => {
        try {
            await updateExpense(editingExpense.id, updatedExpense);
            alert("Expense updated successfully!");
            setEditingExpense(null); // Close edit form
            window.location.reload(); // Refresh list
        } catch (error) {
            console.error("Error updating expense:", error);
            alert("Error updating expense. Check backend logs.");
        }
    };

    // ✅ Function to delete expense
    const deleteExpense = async (id) => {
        await fetch(`http://localhost:8080/expenses/${id}`, { method: "DELETE" });
        alert("Expense deleted!");
        setExpenses(expenses.filter(expense => expense.id !== id));
    };

    return (
        <div className="container mt-4">
            <h2>Expense List</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {expenses.map((expense) => (
                    <tr key={expense.id}>
                        <td>{expense.category}</td>
                        <td>₹{expense.amount}</td>
                        <td>{expense.date}</td>
                        <td>
                            <button className="btn btn-warning btn-sm" onClick={() => handleEditClick(expense)}>Edit</button>
                            <button className="btn btn-danger btn-sm" onClick={() => deleteExpense(expense.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* ✅ Edit Form (Only Shows When Editing) */}
            {editingExpense && (
                <div className="edit-form">
                    <h3>Edit Expense</h3>
                    <label>Category:</label>
                    <input
                        type="text"
                        value={updatedExpense.category}
                        onChange={(e) => setUpdatedExpense({ ...updatedExpense, category: e.target.value })}
                    />
                    <label>Amount:</label>
                    <input
                        type="number"
                        value={updatedExpense.amount}
                        onChange={(e) => setUpdatedExpense({ ...updatedExpense, amount: e.target.value })}
                    />
                    <label>Date:</label>
                    <input
                        type="date"
                        value={updatedExpense.date}
                        onChange={(e) => setUpdatedExpense({ ...updatedExpense, date: e.target.value })}
                    />
                    <button onClick={handleUpdateExpense}>Update</button>
                    <button onClick={() => setEditingExpense(null)}>Cancel</button>
                </div>
            )}
        </div>
    );
}

export default ExpenseList;
