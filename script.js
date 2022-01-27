let loanAmount = document.getElementById('principal-loan-amount');
const interestRate = document.getElementById('interest-rate');
const loanLength = document.getElementById('length-of-loan');
const monthlyPayment = document.getElementById('monthly-payment');
const calculateBtn = document.getElementById('calculate-btn');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  monthPayment();
});

function monthPayment() {
  let i = interestRate.value / 100 / 12;
  let p = loanAmount.value;
  let n = loanLength.value * 12;
  let pay = (p * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
  console.log(pay);
}
