import React from 'react'
import {useSelector} from "react-redux"

const TitleAndBalance = () => {
  const expence = useSelector((state)=>state.expenceSlice)
  console.log(expence);
  
  return (
    <div>
        <div className="">
        <h3 className="mt-8 ml-4 text-2xl  font-bold float-left">Expence Tracker deploy CICD</h3>
         <div className="float-right mr-5 mt-10">
          <span>Your balance update: <b>${expence.balance}</b> </span>
          
         </div>
      </div>
    </div>
  )
}

export default TitleAndBalance