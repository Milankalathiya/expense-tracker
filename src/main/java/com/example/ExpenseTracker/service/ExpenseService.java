package com.example.ExpenseTracker.service;


import com.example.ExpenseTracker.dao.ExpenseDAO;
import com.example.ExpenseTracker.model.Expense;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ExpenseService {
    private final ExpenseDAO expenseDAO;

    public ExpenseService(ExpenseDAO expenseDAO) {
        this.expenseDAO = expenseDAO;
    }

    public List<Expense> fetchExpenses() {
        return expenseDAO.getAllExpenses();
    }

    public void addExpense(Expense expense) {
        expenseDAO.addExpense(expense);
    }

    public void updateExpense(Expense expense) {  // ✅ Fix for update error
        expenseDAO.updateExpense(expense);
    }

    public void deleteExpense(int id) {  // ✅ Fix for delete error
        expenseDAO.deleteExpense(id);
    }
}

