import React from 'react';

import TransactionHistoryCss from './TransactionHistory.module.css';

const TransactionHistory = () => {
    return (
        <table className={TransactionHistoryCss.TransactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Invoice</td>
                    <td>125</td>
                    <td>USD</td>
                </tr>
                <tr>
                    <td>Withdrawal</td>
                    <td>85</td>
                    <td>USD</td>
                </tr>
            </tbody>
        </table>

    );
};

export default TransactionHistory;