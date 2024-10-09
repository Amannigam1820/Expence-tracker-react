import React, { useState } from "react";
import {useDispatch} from "react-redux"
import { AddTransactionData } from "../redux/expenceSlice";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const dispatch = useDispatch()

  const handleAddAmount = () =>{
    const numericAmount = parseFloat(amount)
    //console.log(text,typeof numericAmount);
    dispatch(AddTransactionData({text:text,amount:numericAmount}))
    setText("")
    setAmount("")
    
  }
  return (
    <div className="mt-5">
      <div className="mt-8 flex justify-center">
        <h1 className="text-xl font-semibold text-gray-700">
          Add New Transaction
        </h1>
      </div>
      <div className="flex flex-col gap-2 mt-4 justify-center items-center">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="text"
        >
          Text
        </label>
        <input
          className=" w-1/2 p-2 text-sm text-gray-700 rounded-lg border"
          type="text"
          id="text"
          placeholder="Enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="amount"
        >
          Amount
        </label>
        <input
          className=" w-1/2 p-2 text-sm text-gray-700 rounded-lg border mb-4"
          type="number"
          id="amount"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleAddAmount} className="bg-gradient-to-r from-blue-300 via-teal-300 to-green-300  text-lg font-semibold py-3 px-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-200 text-black mb-10">
          Add Transaction
        </button>
      </div>
    </div>
  );
};

export default AddTransaction;
