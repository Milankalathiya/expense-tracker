package com.example.ExpenseTracker;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@CrossOrigin("*") // Allows frontend to access backend APIs
public class ExpenseTrackerApplication {
	public static void main(String[] args) {
		SpringApplication.run(ExpenseTrackerApplication.class, args);
	}
}
