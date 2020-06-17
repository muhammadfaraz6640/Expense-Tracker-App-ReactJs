import React , { useState, useContext } from 'react';
import { GlobalState } from '../ReactContext/GlobalContext';
export const AddTransaction = () => {
    const { AddTransactionMine } = useContext(GlobalState);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const MySubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount : +amount
        }
        AddTransactionMine(newTransaction);
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={MySubmit}>
            <div className="form-control">
                <label for="text">Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} id="text" placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label for="amount"
                >Amount <br />
                (negative - expense, positive - income)</label
                >
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} id="amount" placeholder="Enter amount..." />
            </div>
            <button className="btn">Add transaction</button>
            </form>
            
        </div>
    )
}




