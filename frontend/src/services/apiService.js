const API_URL = "http://localhost:8080/expenses";

export async function getExpenses() {
    const response = await fetch(API_URL);
    return await response.json();
}

export async function addExpense(expense) {
    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(expense),
    });
}

export async function updateExpense(id, expense) {
    const response = await fetch(`http://localhost:8080/expenses/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(expense),
    });

    if (!response.ok) {
        throw new Error("Failed to update expense");
    }
}

