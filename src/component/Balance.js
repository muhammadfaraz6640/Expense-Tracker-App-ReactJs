import React , { useContext } from 'react'
import { GlobalState } from '../ReactContext/GlobalContext';

export const Balance = () => {
    const {transactions} = useContext(GlobalState);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div>
            <h4>Your Balance</h4>
            <h1 id="balance">{total}</h1>
        </div>
    )
}
