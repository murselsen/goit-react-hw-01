import React from 'react';

import TransactionHistoryCss from './TransactionHistory.module.css';


const TransactionHistoryItem = ({ type, amount, currency }) => {
    return (
        <>
            <tr> <td>{type}</td> <td>{amount}</td>  <td>{currency}</td></tr>
        </>
    );
}


const TransactionHistory = ({ items }) => {
    const mapItems = items.map(
        (item) => <TransactionHistoryItem key={item.id} type={item.type} amount={item.amount} currency={item.currency} />
    )
    return (
        <table className={TransactionHistoryCss.TransactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    {/* @murselsen */}
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {mapItems}
            </tbody>
        </table >

    );
};

export default TransactionHistory;