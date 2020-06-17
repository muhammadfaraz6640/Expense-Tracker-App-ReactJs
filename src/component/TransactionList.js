import React , { useContext } from 'react'
import { GlobalState } from '../ReactContext/GlobalContext';
import { Transaction } from './Transaction';
export const TransactionList = () => {
    const {transactions} = useContext(GlobalState);
    // console.log(transactions);

    return (
        <div>
              <h3>History</h3>

        <ul id="list" className="list">            
            {transactions.map(transaction => (<Transaction key={ transaction.id} transaction={transaction} />))}
        </ul>

        </div>
    )
}
