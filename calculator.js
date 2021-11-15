window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});


function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let amount = document.getElementById("loan-amount");
  amount.value = 5000;
  let years = document.getElementById("loan-years");
  years.value = 3;
  let rate = document.getElementById("loan-rate");
  rate.value = 7.5;
  getCurrentUIValues();
  calculateMonthlyPayment(getCurrentUIValues());
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyPayment = (values['amount'] * ((values['rate'] / 100) / 12)) / (1 - Math.pow((1 + ((values['rate'] / 100) / 12)), (-(12 * values['years']))));
  monthlyPayment = monthlyPayment.toFixed(2);
  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
    let payment = document.getElementById("monthly-payment");
    payment.innerText = `$${calculateMonthlyPayment(getCurrentUIValues())}`;
}