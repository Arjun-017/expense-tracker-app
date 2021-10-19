import React, {useContext, useState} from 'react';
import { GlobalContext } from '../context/GlobalState';

function Transaction() {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);
    const submit = e => {
        e.preventDefault();
        const newTransaction = {
            text: text,
            amount: +amount
        };

        addTransaction(newTransaction);
    }
    return(
        <>
        <div className="item-container">
            <p>
                Commodity purchased / credited 
            </p>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="amount-container">
            <p>
                Amount 
            </p>
            <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        </div>
        <p className="submit-button" onClick={submit}>Submit</p>
        </>
    );
}

export default Transaction;