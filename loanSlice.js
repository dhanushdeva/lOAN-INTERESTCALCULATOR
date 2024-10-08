
import { createSlice } from '@reduxjs/toolkit';

const loanSlice = createSlice({
  name: 'loan',
  initialState: {
    loanEligibility: '',
    bankDetails: {},
    loanAmount: null,
    interestAmount: null,  // Add this line
  },
  reducers: {
    setLoanEligibility: (state, action) => {
      state.loanEligibility = action.payload;
    },
    setBankDetails: (state, action) => {
      state.bankDetails = action.payload;
    },
    setLoanAmount: (state, action) => {
      state.loanAmount = action.payload;
    },
    setInterestAmount: (state, action) => {  // Add this block
      state.interestAmount = action.payload;
    },
  },
});

export const { setLoanEligibility, setBankDetails, setLoanAmount, setInterestAmount } = loanSlice.actions;
export default loanSlice.reducer;
