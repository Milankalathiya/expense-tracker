import React, { useState } from "react";
import { addExpense } from "../services/apiService";

function AddExpense() {
    const [expense, setExpense] = useState({ category: "", amount: "", date: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addExpense(expense);
        alert("Expense added successfully!");
        window.location.reload(); // Refresh to show new expenses
    };

    return (
        <div className="container mt-4">
            <h2>Add Expense</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Category:</label>
                    <input type="text" className="form-control"
                           onChange={(e) => setExpense({ ...expense, category: e.target.value })} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Amount:</label>
                    <input type="number" className="form-control"
                           onChange={(e) => setExpense({ ...expense, amount: e.target.value })} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Date:</label>
                    <input type="date" className="form-control"
                           onChange={(e) => setExpense({ ...expense, date: e.target.value })} required />
                </div>
                <button type="submit" className="btn btn-primary">Add Expense</button>
            </form>
        </div>
    );
}

export default AddExpense;
