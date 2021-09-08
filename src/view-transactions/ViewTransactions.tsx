import React from 'react';
import Transaction from './Transaction';
import './Transaction.css';


export default function ViewTransactions({transactions}) {
    return (
        transactions.map(transaction => {
            return <Transaction category={transaction.category} total={transaction.total}  />
        })
    );
}
