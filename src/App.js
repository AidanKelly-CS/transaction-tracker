import logo from './logo.svg';
import './App.css';
import Button from './Button';
import React, {useState,useRef, useEffect} from 'react';

function App() {

  const [total, setTotal] = useState("0");
  let category = useRef();
  const [transaction, setTransaction] = useState({"total":"0", "category":"any"});

  function updateTotal(e){
    let buttonValue = e.target.value;
    
    let [,pence] = total.split(".");

    if(!pence || pence.length < 2){
      setTotal(total === "0" ? buttonValue : total+buttonValue );
    }

  }

  function addDecimal(e){
    console.log(category);
    let buttonValue = e.target.value;
    if(buttonValue === "." && !total.includes(".") ){
        setTotal(total + buttonValue);
    }
  }


  function deleteChar(e){
    if(total.length === 1){
      setTotal("0");
    }
    else{
      setTotal(total.substring(0,total.length-1));
    }
  }

  function createTransaction(){
    console.log(`transaction created with total of £${total}`);
    setTransaction({...transaction,total: total });
    setTotal("0");

  }
  
  function setCategory(e){
    setTransaction({ ...transaction, category: e.target.value});
  }


  return (
    <>
    <p>{total}</p>
    <select onChange={setCategory}>
      <option value="food">food</option>
      <option value="clothes">clothes</option>
      <option value="entertainment">entertainment</option>
    </select>

    <Button value={1} updateTotal={updateTotal}/>
    <Button value={2} updateTotal={updateTotal}/>
    <Button value={3} updateTotal={updateTotal}/>
    <Button value={4} updateTotal={updateTotal}/>
    <Button value={5} updateTotal={updateTotal}/>
    <Button value={6} updateTotal={updateTotal}/>
    <Button value={7} updateTotal={updateTotal}/>
    <Button value={8} updateTotal={updateTotal}/>
    <Button value={9} updateTotal={updateTotal}/>
    <Button value={"."} updateTotal={addDecimal}/>
    <button onClick={deleteChar}>&lt;</button>
    <button onClick={createTransaction}>Add</button>

    <p>{transaction.category}</p>
    <p>{transaction.total}</p>
    </>
  );
}

export default App;
