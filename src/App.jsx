import React from "react";
import IncomeAndExpenceCard from "./component/incomeAndExpenceCard";
import TitleAndBalance from "./component/TitleAndBalance";
import TransactionHistory from "./component/TransactionHistory";
import AddTransaction from "./component/AddTransaction";

const App = () => {
  return (
    <div className="h-max mx-auto bg-slate-200  w-1/2 flex flex-col">
      <TitleAndBalance/>
      <IncomeAndExpenceCard/>
      <TransactionHistory/>
      <AddTransaction/>
    </div>
  );
};

export default App;
