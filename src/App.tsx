import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateTransaction from './create-transaction/CreateTransaction';
import ViewTransactions from './view-transactions/ViewTransactions';

function App() {
  const transactions = [
    {
      "category":"food",
      "total":"£100"
    },
    {
      "category":"food",
      "total":"£1001"
    }
  ]
  return (
    <>

    <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Noto+Sans&display=swap');
    </style> 
    {/* <CreateTransaction/> */}
    <ViewTransactions transactions={transactions}/>
    </>
  );
}

export default App;
