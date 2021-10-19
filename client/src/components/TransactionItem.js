import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';


function TransactionItem({ transaction }) {
    let sign = transaction.amount<0?"-":"+";
    let listClassName = transaction.amount<0?"redlist":"greenlist";
    const { deleteTransaction } = useContext(GlobalContext);
    return (
        <li className={listClassName} onClick={() => deleteTransaction(transaction._id)}>
            <p>{transaction.text}</p>
            <p>{sign+"$"+Math.abs(transaction.amount)}</p>
        </li>
    );
}
export default TransactionItem;

