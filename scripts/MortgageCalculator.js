// receive inputs 
const principal = 53000;
const interestRate = 7.625;
const loanLengthInYears = 15;

// Step 1: Convert annual interest rate into monthly interest rate and put it in decimal notation 
const monthlyInterestRate = (interestRate/100)/12;

//Step 2: Convert loan length from years to months 
const loanLengthInMonths = loanLengthInYears*12;

//Step 3: Use the monthly payment formula 
const monthlyPayment = [principal * (monthlyInterestRate * (1 + monthlyInterestRate)**loanLengthInMonths)]/[(1 + monthlyInterestRate)** loanLengthInMonths - 1]

// Step 4: Use monthly payment to calculate total interest 
const totalInterestPaid = (monthlyPayment * loanLengthInMonths) - principal;

console.log(monthlyPayment.toFixed(2));
console.log(totalInterestPaid.toFixed(2));
