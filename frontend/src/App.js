import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import ExpenseChart from "./components/ExpenseChart";

function App() {
    return (
        <Router>
            <div className="container">
                <h1 className="text-center mt-4">Expense Tracker</h1>

                {/* ✅ Navigation Menu */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/expenses">Expenses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/analytics">Analytics</Link>
                        </li>
                    </ul>
                </nav>

                {/* ✅ Define Routes */}
                <Routes>
                    <Route path="/" element={<AddExpense />} />
                    <Route path="/expenses" element={<ExpenseList />} />
                    <Route path="/analytics" element={<ExpenseChart />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
