let expenses = [];
let totalAmount = 0;
const CategorySelect = document.getElementById('category_select');
const amountInput = document.getElementById('amount_input');
const infoInput = document.getElementById('info');
const dateInput = document.getElementById('date_input');
const addBtn = document.getElementById('add_btn');
const expenseTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function () {
    const category = CategorySelect.value;
    const info = infoInput.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === '') {
        alert('Please select a category');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    if (info === '') {
        alert('Please enter valid info');
        return;
    }
    if (date === '') {
        alert('Please enter a valid date');
        return;
    }


    const expense = { category, amount, info, date };
    expenses.push(expense);

    if (category === 'Income') {
        totalAmount += amount;
    } else if (category === 'Expense') {
        totalAmount -= amount;
    }
    totalAmountCell.textContent = totalAmount;


    const newRow = expenseTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const infoCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    categoryCell.textContent = category;
    amountCell.textContent = amount;
    infoCell.textContent = info;
    dateCell.textContent = date;

 
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function () {
 
        expenseTableBody.removeChild(newRow);

     
        if (category === 'Income') {
            totalAmount -= amount;
        } else if (category === 'Expense') {
            totalAmount += amount;
        }
        totalAmountCell.textContent = totalAmount;

        expenses.splice(expenses.indexOf(expense), 1);
    });

    deleteCell.appendChild(deleteBtn);

    CategorySelect.value = '';
    amountInput.value = '';
    infoInput.value = '';
    dateInput.value = '';
});
