import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Edit3, Trash2 } from 'lucide-react';
import { deleteExpense, editExpense } from '../Redux/action';
import { RESET_FORM } from '../Redux/actionType';




export const ExpenseTable = (props) => {
    // console.log(props)
    const dispatch=useDispatch()
  const expenses=useSelector((state)=>state.expenses)



    const handleDelete=(id)=>{
       dispatch(deleteExpense(id))
    }

    const handleEdit=(expense)=>{
      dispatch(editExpense(expense))
     

    }
    
  return (
    <div className="overflow-x-auto mt-8">
    <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg">
     
    <thead className={` ${props.delete ? "bg-blue-800" : "bg-pink-700 "} text-white uppercase text-sm`}>
       <tr>
           <th className="px-4 py-3 text-left">Date</th>
          <th className="px-4 py-3 text-left">Description</th>
          <th className="px-4 py-3 text-left">Category</th>
          <th className="px-4 py-3 text-center">Amount</th>
          {props.delete && (
            <th className="px-4 py-3 text-center">Action</th>
          )}
        </tr>
      </thead>

     
      <tbody>
        {expenses.map((expense, index) => (
          <tr
            key={index}
            className={`border-b border-gray-300 ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            } hover:bg-gray-200 p-0 `}
          >
              <td className="px-4 py-3">{expense.date}</td>
            <td className="px-4 py-3">{expense.description}</td>
            <td className="px-4 py-3">{expense.category}</td>
            <td className="px-4 py-3 text-center font-semibold text-blue-600">
              ₹{expense.amount.toLocaleString("en-IN")}
            </td>
            {props.delete && (
               <td className="px-4 py-3 text-center flex justify-around">
               <button
                 onClick={() => handleDelete(expense.id)}
                 className="text-red-500 hover:text-red-700 transition duration-200"
               >
                 <Trash2 size={20} />
               </button>
               <button
                 onClick={()=>handleEdit(expense)}
                 className="text-red-500 hover:text-red-700 transition duration-200"
               >
                 <Edit3 size={20} />
               </button>
             </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}
