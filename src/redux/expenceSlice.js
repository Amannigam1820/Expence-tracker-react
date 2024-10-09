import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  TransactionAmount: 0,
  balance: 0,
  income: 0,
  expense: 0,
  TransactionName: "",
  transactionArray :[]
};

const expenceSlice = createSlice({
  name: "expenceSlice",
  initialState,
  reducers: {
    AddTransactionData: (state, action) => {
      const { text, amount } = action.payload;
      //console.log(text, amount);

      if (state.income <= 0 && action.payload.amount > 0) {
        state.income = amount;
        state.balance = amount;
        state.TransactionName = text;
        state.transactionArray.push({text:text,amount:amount})
      }
      else if(state.income > 0 && action.payload.amount > 0){
        state.income += amount;
        state.balance += amount
        state.transactionArray.push({text:text,amount:amount})
      }
      else if(state.income > 0 && action.payload.amount < 0){
        state.expense += Math.abs(amount)
        state.balance = state.balance - Math.abs(amount)
        state.transactionArray.push({text:text,amount:amount})
      }
    },
  },
});
export const { AddTransactionData } = expenceSlice.actions;

// Export the slice for the store
export { expenceSlice };
