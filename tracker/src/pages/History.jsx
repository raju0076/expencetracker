import React from 'react'
import { ExpenseTable } from '../components/ExpenseTable'

export const History = () => {
  return (
    <div className='w-3/4 m-auto mt-20'>
      <ExpenseTable delete={false}/>
    </div>
  )
}
