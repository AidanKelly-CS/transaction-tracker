import { icon } from '@fortawesome/fontawesome-svg-core';
import { faHotdog } from '@fortawesome/free-solid-svg-icons';
import { group } from 'console';
import React, { useEffect, useState } from 'react';
import Transaction from './Transaction';
import './Transaction.css';
import { TransactionInterface } from './TransactionInterface';


export default function ViewTransactions() {
    let [transactions, setTransactions] = useState([] as TransactionInterface[]);

    useEffect(() => {
      resetTransactions();
    }, []); 


    /**
     * reset transactions value to all transactions
     */
    function resetTransactions(){
      const trans = getTransactions();
      if(trans){
        setTransactions(trans);
      }
      console.log(trans)
    }

    function getTransactions(){
      return JSON.parse(localStorage.getItem("transactions")) as TransactionInterface[];
    }

    function filterByKey(key){

      let groupedTransactions = {};
      getTransactions().forEach(t =>{
        if (groupedTransactions[t[key]]){
          groupedTransactions[t[key]].total = Number(groupedTransactions[t[key]].total) +  Number(t.total)
        }else{
          groupedTransactions[t[key]] = t
        }
      })

      setTransactions(Object.values(groupedTransactions))
      console.log(groupedTransactions)

    }

    return (
        <>
        <button onClick={() => filterByKey("store")}>Group by Store</button>
        <button onClick={() => filterByKey("category")}>Group by Categories</button>
        <button onClick={resetTransactions}>Show All</button>
        {
        transactions.map(transaction => {
            return <Transaction category={transaction.category} total={transaction.total} icon={transaction.icon} store={transaction.store} />
        })
        }
        </>
    );
}
