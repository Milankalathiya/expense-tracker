# Expense Tracker 💰📊  

A Full-Stack **Expense Tracker** built with **Spring Boot (Backend) and React (Frontend)**. This application helps users track their expenses with **CRUD operations, expense analytics (charts), and a modern UI**.

## 🌟 Features  
✅ Add, Edit, Delete Expenses  
✅ View Expense Analytics with Charts (Pie & Bar)  
✅ Filter Expenses by Category & Date  
✅ Fully Responsive UI  
✅ Navigation with React Router  

## 🚀 Technologies Used  
- **Frontend:** React, React Router, Chart.js, Bootstrap  
- **Backend:** Spring Boot, JDBC, MySQL  
- **Database:** MySQL  

## 📂 Project Structure  
ExpenseTracker/                # Root Project Folder
│── src/                       # Java Source Code (Spring Boot Backend)
│   ├── main/
│   │   ├── java/com/expensetracker/
│   │   │   ├── controller/    # REST Controllers
│   │   │   ├── service/       # Business Logic
│   │   │   ├── dao/           # Database Access (JDBC)
│   │   │   ├── model/         # Data Models
│   │   ├── resources/         # application.properties
│── frontend/                  # React Frontend
│   ├── src/                   # React Source Code
│   │   ├── components/        # React Components
│   │   │   ├── AddExpense.js  # Add Expense Form
│   │   │   ├── ExpenseList.js # Expense List Table
│   │   │   ├── ExpenseChart.js # Analytics (Charts)
│   │   ├── services/          # API Service Calls
│   │   ├── App.js             # Main React App
│   │   ├── index.js           # Entry Point
│   ├── public/                # Static Files
│   ├── package.json           # Dependencies
│── pom.xml                    # Maven Configuration (Backend)
│── ExpenseTrackerApplication.java  # Main Spring Boot App
│── README.md                  # Project Documentation


## 🛠 Installation & Setup  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/<your-username>/expense-tracker.git
cd expense-tracker
