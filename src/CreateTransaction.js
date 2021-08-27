import './App.css';
import Button from './Button';
import React, {useState,useRef, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faCoffee, faGamepad, faHotdog } from '@fortawesome/free-solid-svg-icons'
import Category from './category/Category';


export default function CreateTransaction() {
    const currency = "£";
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

    function clearTransaction(){
      setTotal("0");
    }
  
  
    return (
      <>


      <div class="flex-container">
      <Category icon={faHotdog} color={"orange"} type={"main"}/>
      <Category icon={faCar} color={"red"} type={"main"}/>
      <Category icon={faGamepad} color={"blue"} type={"main"}/>
      </div>

      <div class="flex-container">
      <Category icon={faCar} color={"red"} type={"sub"}/>
      <Category icon={faCar} color={"red"} type={"sub"}/>
      <Category icon={faCar} color={"red"} type={"sub"}/>
      </div>


      <p>{currency} {total}</p>
      <select onChange={setCategory}>
        <option value="food">food</option>
        <option value="clothes">clothes</option>
        <option value="entertainment">entertainment</option>
      </select>
  
      <div class="flex-container">
      <Button value={1} updateTotal={updateTotal}/>
      <Button value={2} updateTotal={updateTotal}/>
      <Button value={3} updateTotal={updateTotal}/>
      </div>

      <div class="flex-container">
      <Button value={4} updateTotal={updateTotal}/>
      <Button value={5} updateTotal={updateTotal}/>
      <Button value={6} updateTotal={updateTotal}/>
      </div>
      
      <div class="flex-container">
      <Button value={7} updateTotal={updateTotal}/>
      <Button value={8} updateTotal={updateTotal}/>
      <Button value={9} updateTotal={updateTotal}/>
      </div>
      
      <div class="flex-container">
      <Button value={0} updateTotal={updateTotal}/>
      <Button value={"."} updateTotal={addDecimal}/>
      <Button value={"<"} updateTotal={deleteChar}/>
      </div>
      
      <button class="control-button" onClick={createTransaction}>Add</button>

      <button class="control-button" onClick={clearTransaction}>Clear</button>
  
      {/* <p>{transaction.category}</p>
      <p>{transaction.total}</p> */}
      </>
    );
}
