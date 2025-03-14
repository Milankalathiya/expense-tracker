package com.example.ExpenseTracker.controller;

import com.example.ExpenseTracker.model.Expense;
import com.example.ExpenseTracker.dao.ExpenseDAO;
import com.example.ExpenseTracker.service.ExpenseService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/expenses")
@CrossOrigin("*") // Allows frontend access
public class ExpenseController {
    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @GetMapping
    public List<Expense> getExpenses() {
        return expenseService.fetchExpenses();
    }

    @PostMapping
    public String addExpense(@RequestBody Expense expense) {
        expenseService.addExpense(expense);
        return "Expense added successfully";
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateExpense(@PathVariable int id, @RequestBody Expense expense) {
        expense.setId(id); // Ensure the correct ID is set
        expenseService.updateExpense(expense);
        return ResponseEntity.ok("Expense updated successfully!");
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteExpense(@PathVariable int id) {
        expenseService.deleteExpense(id);
        return ResponseEntity.ok("Expense deleted successfully!");
    }

}
