package com.example.ExpenseTracker.dao;


import com.example.ExpenseTracker.model.Expense;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class ExpenseDAO {
    private final JdbcTemplate jdbcTemplate;

    public ExpenseDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Expense> getAllExpenses() {
        String sql = "SELECT * FROM expenses";
        return jdbcTemplate.query(sql, (rs, rowNum) ->
                new Expense(rs.getInt("id"), rs.getString("category"), rs.getDouble("amount"), rs.getString("date")));
    }

    public int addExpense(Expense expense) {
        String sql = "INSERT INTO expenses (category, amount, date) VALUES (?, ?, ?)";
        return jdbcTemplate.update(sql, expense.getCategory(), expense.getAmount(), expense.getDate());
    }

    public int updateExpense(Expense expense) {
        String sql = "UPDATE expenses SET category = ?, amount = ?, date = ? WHERE id = ?";
        return jdbcTemplate.update(sql, expense.getCategory(), expense.getAmount(), expense.getDate(), expense.getId());
    }


    public int deleteExpense(int id) {
        String sql = "DELETE FROM expenses WHERE id = ?";
        return jdbcTemplate.update(sql, id);
    }

}

