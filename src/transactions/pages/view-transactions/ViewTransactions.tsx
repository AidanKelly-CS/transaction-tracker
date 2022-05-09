import { icon } from '@fortawesome/fontawesome-svg-core';
import { faHotdog } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Transaction from './Transaction';
import './Transaction.css';
import { TransactionInterface } from './TransactionInterface';


export default function ViewTransactions() {
    let [transactions, setTransactions] = useState([]);

    useEffect(() => {
      const trans = JSON.parse(localStorage.getItem("transactions")) as TransactionInterface[];
      if(trans){
        setTransactions(trans);
      }
      console.log("transactions", trans);
    }, []); 
  
    return (
        <>
        {
        transactions.map(transaction => {
            return <Transaction category={transaction.category} total={transaction.total} icon={transaction.icon} store={transaction.store} />
        })
        }
        </>
    );
}
