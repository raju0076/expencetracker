import React from 'react'
import { Budget } from '../components/Budget'
import { ExpenseForm } from '../components/ExpenseForm'
import { ExpenseTable } from '../components/ExpenseTable'

export const Expense = () => {
  return (
   
       <div className='p-10 w-3/4 m-auto mt-10'>
          <h1 className='text-3xl font-bold'>Expense Tracker</h1>
            <Budget/>
            <ExpenseForm/>
            <ExpenseTable delete={true}/>
        </div> 
   
  )
}
