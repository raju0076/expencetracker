import { ADD_CITY, ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE, RESET_FORM, SET_BUDGET } from "./actionType";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem("expenses");
        return serializedState ? JSON.parse(serializedState) : [];
    } catch (err) {
        console.error("Error loading state", err);
        return [];
    }
};

export const initialState = {
    budget: 0,
    expenses: loadState(),
    city: "",
    editExpense: {},  
    isEdit: false
};

export const expenseReducer = (state = initialState, action) => {
    let updatedExpenses;
    
    switch (action.type) {
        case SET_BUDGET:
            return { ...state, budget: action.payload };

        case ADD_EXPENSE:
            updatedExpenses = [...state.expenses, action.payload];
            localStorage.setItem("expenses", JSON.stringify(updatedExpenses)); 
            return { 
                ...state, 
                expenses: updatedExpenses, 
                isEdit: false, 
                editExpense: {}  
            };

        case ADD_CITY:
            return { ...state, city: action.payload };

        case DELETE_EXPENSE:
            updatedExpenses = state.expenses.filter(expense => expense.id !== action.payload);
            localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
            return { 
                ...state, 
                expenses: updatedExpenses 
            };

        case EDIT_EXPENSE:
            updatedExpenses = state.expenses.map((exp) =>
                exp.id === action.payload.id ? action.payload : exp
            );
            localStorage.setItem("expenses", JSON.stringify(updatedExpenses)); 
            return {
                ...state,
                expenses: updatedExpenses,
                editExpense: action.payload,  
                isEdit: true
            };

        case RESET_FORM:
            return {
                ...state,
                isEdit: false,
                editExpense: {}  
            };

        default:
            return state;
    }
};
