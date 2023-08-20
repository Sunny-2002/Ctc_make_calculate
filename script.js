document.addEventListener('DOMContentLoaded', function () {
  const calculateButton = document.getElementById('calculate');
  const resultDiv = document.getElementById('result');

  calculateButton.addEventListener('click', function () {
    const ctc = parseFloat(document.getElementById('ctc').value);
    const bonus = parseFloat(document.getElementById('bonus').value);

    if (!isNaN(ctc) && !isNaN(bonus)) {
      const annualSalary = ctc + bonus;
      const monthlySalary = annualSalary / 12;

      // Calculate tax based on Indian income tax slabs
      let taxAmount;
      if (annualSalary <= 250000) {
        taxAmount = 0;
      } else if (annualSalary <= 500000) {
        taxAmount = (annualSalary - 250000) * 0.05;
      } else if (annualSalary <= 1000000) {
        taxAmount = 12500 + (annualSalary - 500000) * 0.2;
      } else {
        taxAmount = 112500 + (annualSalary - 1000000) * 0.3;
      }

      const netAnnualSalary = annualSalary - taxAmount;
      const netMonthlySalary = netAnnualSalary / 12;

      resultDiv.innerHTML = `
        Monthly Salary (Before Tax): ₹${monthlySalary.toFixed(2)}<br>
        Tax Amount: ₹${taxAmount.toFixed(2)}<br>
        Monthly Salary (After Tax): ₹${netMonthlySalary.toFixed(2)}
      `;
    } else {
      resultDiv.textContent = 'Please enter valid numbers for CTC and Bonus.';
    }
  });
});
 