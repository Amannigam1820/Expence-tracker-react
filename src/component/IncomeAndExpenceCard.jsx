import React from "react";
import {useSelector} from "react-redux"
import {expenceSlice} from "../redux/expenceSlice"


const IncomeAndExpenceCard = () => {

  const expence = useSelector((state)=>state.expenceSlice)
  //console.log(expence.income);
  

  return (
    <div className="flex justify-center items-center  mt-10 ">
      <div className="flex justify-center flex-row gap-x-20 bg-white p-4 shadow-lg  shadow-indigo-500/40 border-red-600 rounded-md">
        <div className="ml-6 ">
          <h3 className="text-md font-semibold">Income</h3>
          <h4 className="text-green-400">${expence.income}</h4>
        </div>
        <hr className="w-full" />
        <div className="mr-6 ">
          <h3 className="text-md font-semibold">Expense</h3>
          <h4 className="text-red-500">${expence.expense}</h4>
        </div>
      </div>
    </div>
  );
};

export default IncomeAndExpenceCard;
