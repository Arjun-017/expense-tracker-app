import React,{ useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';

function Balance(){
    const { transactions } = useContext(GlobalContext);
    const amount = transactions.map(transaction => transaction.amount);
    const balance = amount.reduce((acc, item) => (acc += item),0);
    return(
        <div className="balance-holder">
            <h4 className="balance-text">
                Your Balance
            </h4>
            <h3 className="balance-value">
                $ {balance}
            </h3>
        </div>
    );
}

export default Balance;