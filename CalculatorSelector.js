import React, { useState } from 'react';
import LoanCalculator from './LoanCalculator';
import InterestCalculator from './InterestCalculator';

const CalculatorSelector = () => {
  const [selectedCalculator, setSelectedCalculator] = useState('');

  return (
    <div className="calculator-selector">
      <h2>Select Calculator</h2>
      <button onClick={() => setSelectedCalculator('loan')}>Use Loan Calculator</button>
      <button onClick={() => setSelectedCalculator('interest')}>Use Interest Calculator</button>

      {selectedCalculator === 'loan' && <LoanCalculator />}
      {selectedCalculator === 'interest' && <InterestCalculator />}
    </div>
  );
};

export default CalculatorSelector;
