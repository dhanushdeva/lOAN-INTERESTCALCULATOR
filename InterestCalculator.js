import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInterestAmount } from '../redux/loanSlice';

const InterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const dispatch = useDispatch();
  const interestAmount = useSelector((state) => state.loan.interestAmount);

  const handleCalculate = () => {
    const interest = (principal * rate * time) / 100;
    dispatch(setInterestAmount(interest));
  };

  return (
    <div className="calculator-form">
      <h2>Interest Calculator</h2>
      <input
        type="number"
        placeholder="Principal Amount"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
      />
      <input
        type="number"
        placeholder="Interest Rate"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Time (years)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate Interest</button>
      {interestAmount !== null && <p>Interest: {interestAmount}</p>}
    </div>
  );
};

export default InterestCalculator;
