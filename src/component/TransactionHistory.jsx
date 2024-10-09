import React from "react";
import { useSelector } from "react-redux";

// const TransactionHistory = () => {
//   const expence = useSelector((state) => state.expenceSlice);
//   console.log(expence?.transactionArray);

//   return (
//     <div className="mt-5">
//       <div className="mt- 8 flex justify-center">
//         <h1 className="text-xl font-semibold text-gray-700">
//           Transaction History
//         </h1>
//       </div>
//       {expence.transactionArray.length > 0 ? (
//         expence.transactionArray.map((tranaction) => (
//           <div className="flex flex-row justify-between w-1/2 items-center ml-40 p-2 mt-5 bg-white shadow-lg shadow-indigo-500/40 rounded-md">
//             <h1 className="text-lg font-medium text-gray-700 ml-2">
//               {tranaction.text}
//             </h1>
//             <h2
//               className="text-lg font-medium mr-2"
//               style={{
//                 color: `${parseInt(tranaction.amount) < 0 ? "red" : "green"}`,
//               }}
//             >
//               {tranaction.amount}
//             </h2>
//           </div>
//         ))
//       ) : (
//         <h1 className="mt-5 text-lg font-semibold text-gray-500 text-center bg-gray-200 p-4 rounded-md">
//           No Transaction Yet
//         </h1>
//       )}
//     </div>
//   );
// };
const TransactionHistory = () => {
  const expence = useSelector((state) => state.expenceSlice);
  console.log(expence?.transactionArray);

  return (
    <div className="mt-5">
      <div className="mt-8 flex justify-center">
        <h1 className="text-xl font-semibold text-gray-700">
          Transaction History
        </h1>
      </div>
      <div
        className={`${
          expence.transactionArray.length > 3 ? "max-h-48 overflow-auto" : ""
        }`}
      >
        {expence.transactionArray.length > 0 ? (
          expence.transactionArray.map((tranaction, index) => (
            <div
              key={index} // Add a unique key for each transaction
              className="flex flex-row justify-between w-1/2 items-center ml-40 p-2 mt-5 bg-white shadow-lg shadow-indigo-500/40 rounded-md"
            >
              <h1 className="text-lg font-medium text-gray-700 ml-2">
                {tranaction.text}
              </h1>
              <h2
                className="text-lg font-medium mr-2"
                style={{
                  color: `${parseInt(tranaction.amount) < 0 ? "red" : "green"}`,
                }}
              >
                {tranaction.amount}
              </h2>
            </div>
          ))
        ) : (
          <h1 className="mt-5 text-lg font-semibold text-gray-500 text-center bg-gray-200 p-4 rounded-md">
            No Transaction Yet
          </h1>
        )}
      </div>
    </div>
  );
};


export default TransactionHistory;
