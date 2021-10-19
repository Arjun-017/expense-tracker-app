import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import TransactionItem from './TransactionItem';

function ItemList(){
    const {transactions, getTransactions } = useContext(GlobalContext);
    useEffect(() => {
        getTransactions();
    }, []);
    
    return(
        <>
            <p className="history-text">History</p>
            <ul className="itemlist">
                {
                transactions.map(transaction => (
                    <TransactionItem transaction={transaction} />
                ))
                }
            </ul>
        </>
    )
}

export default ItemList;
