import { ADD_CITY, ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE, SET_BUDGET } from "./actionType";

export const setNewBudget=(amount)=>(
    {
        type:SET_BUDGET,
        payload:amount
    }
)


export const addExpense=(exp)=>(
    {
        type:ADD_EXPENSE,
        payload:exp
    }
)

export const addCity=(value)=>( 
    {
        type:ADD_CITY,
        payload:value

    }
)


export const deleteExpense=(id)=>(
    {
        type:DELETE_EXPENSE,
        payload:id
    }
)
export const editExpense = (updatedExpense) => ({
    type: EDIT_EXPENSE,
    payload: updatedExpense
});

