import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoanAmount, setLoanEligibility } from '../redux/loanSlice';

const LoanCalculator = () => {
  const [annualIncome, setAnnualIncome] = useState('');
  const [assets, setAssets] = useState('');
  const [hasLoan, setHasLoan] = useState(false);
  const [existingLoanAmount, setExistingLoanAmount] = useState('');
  const [repaymentPeriod, setRepaymentPeriod] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  const dispatch = useDispatch();
  const loanAmount = useSelector((state) => state.loan.loanAmount);
  const loanEligibility = useSelector((state) => state.loan.loanEligibility);

  const handleCalculate = () => {
    if (hasLoan) {
      if (existingLoanAmount >= annualIncome * 0.5) {
        dispatch(setLoanEligibility('Not Eligible'));
      } else {
        const remainingAmount = annualIncome - existingLoanAmount;
        const maxNewLoanAmount = remainingAmount * 0.5;
        dispatch(setLoanAmount(maxNewLoanAmount));
        dispatch(setLoanEligibility('Eligible'));

        // Calculate repayment period (example: 5 years with fixed monthly payments)
        const yearsToRepay = 5;
        const monthlyPaymentAmount = maxNewLoanAmount / (yearsToRepay * 12);
        setRepaymentPeriod(`${yearsToRepay} years`);
        setMonthlyPayment(monthlyPaymentAmount.toFixed(2));
      }
    } else {
      if (annualIncome >= 500000 || assets >= 500000) {
        const maxLoanAmount = Math.min(annualIncome * 0.5, assets * 0.5);
        dispatch(setLoanAmount(maxLoanAmount));
        dispatch(setLoanEligibility('Eligible'));

        // Calculate repayment period (example: 5 years with fixed monthly payments)
        const yearsToRepay = 5;
        const monthlyPaymentAmount = maxLoanAmount / (yearsToRepay * 12);
        setRepaymentPeriod(`${yearsToRepay} years`);
        setMonthlyPayment(monthlyPaymentAmount.toFixed(2));
      } else {
        dispatch(setLoanEligibility('Not Eligible'));
      }
    }
  };

  return (
    <div className="calculator-form">
      <h2>Loan Calculator</h2>
      <input
        type="number"
        placeholder="Annual Income"
        value={annualIncome}
        onChange={(e) => setAnnualIncome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Assets"
        value={assets}
        onChange={(e) => setAssets(e.target.value)}
      />
      <div>
        <label>Do you have an existing loan?</label>
        <input
          type="checkbox"
          checked={hasLoan}
          onChange={(e) => setHasLoan(e.target.checked)}
        />
        {hasLoan && (
          <input
            type="number"
            placeholder="Existing Loan Amount"
            value={existingLoanAmount}
            onChange={(e) => setExistingLoanAmount(e.target.value)}
          />
        )}
      </div>
      <button onClick={handleCalculate}>Check Loan Eligibility</button>
      {loanEligibility && (
        <div>
          <p>
            {loanEligibility === 'Eligible'
              ? `Eligible for loan up to: ₹${loanAmount}`
              : 'Not Eligible for a loan'}
          </p>
          {loanEligibility === 'Eligible' && (
            <div>
              <p>Repayment Period: {repaymentPeriod}</p>
              <p>Monthly Payment: ₹{monthlyPayment}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
