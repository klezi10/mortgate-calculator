const loanAmount = document.getElementById('principal-loan-amount');
const interestRate = document.getElementById('interest-rate');
const loanLength = document.getElementById('length-of-loan');
const monthlyPayment = document.getElementById('monthly-payment');
const calculateBtn = document.getElementById('calculate-btn');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  calculatePayment();
});

function calculatePayment() {}
