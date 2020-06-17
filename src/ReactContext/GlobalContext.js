import React , { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { Transaction } from '../component/Transaction';
const initialState = {
    transactions : [
      
    ]
}

export const GlobalState = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function DeleteTransaction(id){
        dispatch({
            type : 'DELETE_TRANSACTION',
            payload : id
        });
    }

   function AddTransactionMine(transaction){
        dispatch({
            type : 'ADD_TRANSACTION',
            payload : transaction
        });
    }
    return(<GlobalState.Provider value={{
        transactions : state.transactions,
        DeleteTransaction,
        AddTransactionMine
    }} >
        {children}
    </GlobalState.Provider>);
}
