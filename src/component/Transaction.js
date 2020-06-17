import React , { useContext } from 'react';
import { GlobalState } from '../ReactContext/GlobalContext';

export const Transaction = ({transaction}) => {    
    const { DeleteTransaction } = useContext(GlobalState);
    // console.log(transaction.id);
    // var id= transaction.id;
    return (
        <>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.text} <span>{transaction.amount}</span><button 
                onClick={() => DeleteTransaction(transaction.id)} className="delete-btn">x</button>                
            </li>
        </>
    )
}
