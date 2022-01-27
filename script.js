let loanAmount = document.getElementById('principal-loan-amount');
const interestRate = document.getElementById('interest-rate');
const loanLength = document.getElementById('length-of-loan');
const monthlyPaymentText = document.getElementById('monthly-payment');
const calculateBtn = document.getElementById('calculate-btn');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  monthlyPayment();
});

function monthlyPayment() {
  let i = interestRate.value / 100 / 12;
  let p = loanAmount.value;
  let n = loanLength.value * 12;
  const payment = Math.round(
    (p * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1)
  );
  monthlyPaymentText.innerHTML = `Your monthly mortgate payment will be $${payment.toLocaleString(
    'en'
  )}.`;
}
