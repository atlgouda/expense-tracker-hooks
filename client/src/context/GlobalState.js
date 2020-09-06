// Larger files will have states for different components
import React, { createContext, useReducer } from "react";
// Can create app Reducer in this file if preferred
import AppReducer from './AppReducer'

// Initial state
// just need access to transactions globally, can run calculations etc as long as we have access to transactions
const initialState = {
  transactions: [],
};

// Create context to bring into other components
export const GlobalContext = createContext(initialState)

// Provider component - need to wrap around components (CHILDREN) that need to have initial state
export const GlobalProvider = ({children}) => {
    // need dispatch when using reducer
    const [state,dispatch] = useReducer(AppReducer, initialState)

    // Actions
    function deleteTransaction(id) {
        dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    })
    }

    function addTransaction(transaction) {
        dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    })
    }


    // return Provider = children will be whatever we are wrapping with provider
    // passing transactions to be accessed in other components
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}