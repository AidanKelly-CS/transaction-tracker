import React from 'react';
import Transaction from './Transaction';

export default function ViewTransactions({transactions}) {
    return (
        transactions.map(transaction => {
            return <Transaction category={transaction.category} total={transaction.total}  />
        })
    );
}
