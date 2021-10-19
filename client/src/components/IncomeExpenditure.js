import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function IncomeExpenditure() {

    const { transactions } = useContext(GlobalContext);
    const amount = transactions.map(transaction => transaction.amount);
    const income = amount.reduce((acc,item) => (acc += item>0?item:0),0);
    const expenditure = amount.reduce((acc,item) => (acc += item>0?0:item),0);

    return(
        <div className="income-expenditure-frame">
            <div className="income-holder">
                <h4>
                    Income
                </h4>
                <h3>
                    $+{income}
                </h3>
            </div>
            <div className="expenditure-holder">
                <h4>
                    Expenditure
                </h4>
                <h3>
                    ${Math.abs(expenditure)}
                </h3>
            </div>
            
        </div>
    );
}

export default IncomeExpenditure;