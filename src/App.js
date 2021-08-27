import './App.css';
import CreateTransaction from './CreateTransaction';
import ViewTransactions from './ViewTransactions';

function App() {
  const transactions = [
    {
      "category":"test",
      "total":"£100"
    },
    {
      "category":"test1",
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
    <CreateTransaction/>
    <ViewTransactions transactions={transactions}/>
    </>
  );
}

export default App;
