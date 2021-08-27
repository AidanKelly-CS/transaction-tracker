import './App.css';
import Button from './Button';
import React, {useState,useRef, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faCoffee, faFilm, faGamepad, faGift, faGlassMartiniAlt, faHeart, faHotdog, faPlaneDeparture, faRoute } from '@fortawesome/free-solid-svg-icons'
import Category from './category/Category';


export default function CreateTransaction() {
    const currency = "£";
    const [total, setTotal] = useState("0");
    const [categories, setCategories] = useState({
      "food": false,
      "transport":false,
      "entertainment":false,
      "cinema": false,
      "car":false,
      "date":false,
      "drinks":false,
      "holiday":false,
      "gift":false
    });
  
    function updateTotal(e){
      let buttonValue = e.target.value;
      
      let [,pence] = total.split(".");
  
      if(!pence || pence.length < 2){
        setTotal(total === "0" ? buttonValue : total+buttonValue );
      }
  
    }
  
    function addDecimal(e){
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
    }
    
    function setCategory(category){
      if(category in categories){
        setCategories({...categories, [category]:!categories.category});
      }
    }

    function clearTransaction(){
      setTotal("0");
    }
  
    return (
      <>
      <div className="flex-container">
      <Category icon={faHotdog} color={"orange"} type={"main"} onClick={()=>setCategory("food")}/>
      <Category icon={faRoute} color={"red"} type={"main"} onClick={()=>setCategory("transport")}/>
      <Category icon={faGamepad} color={"blue"} type={"main"} onClick={()=>setCategory("entertainment")}/>
      </div>

      <div className="flex-container">
      <Category icon={faCar} color={"red"} type={"sub"} onClick={()=>setCategory("car")}/>
      <Category icon={faFilm} color={"red"} type={"sub"} onClick={()=>setCategory("cinema")} />
      <Category icon={faHeart} color={"red"} type={"sub"} onClick={()=>setCategory("date")}/>
      <Category icon={faGlassMartiniAlt} color={"red"} type={"sub"} onClick={()=>setCategory("drinks")}/>
      <Category icon={faPlaneDeparture} color={"red"} type={"sub"} onClick={()=>setCategory("holiday")}/>
      <Category icon={faGift} color={"red"} type={"sub"} onClick={()=>setCategory("gift")}/>
      </div>

      <p>{currency} {total}</p>
      <div className="flex-container">
      <Button value={1} updateTotal={updateTotal}/>
      <Button value={2} updateTotal={updateTotal}/>
      <Button value={3} updateTotal={updateTotal}/>
      </div>

      <div className="flex-container">
      <Button value={4} updateTotal={updateTotal}/>
      <Button value={5} updateTotal={updateTotal}/>
      <Button value={6} updateTotal={updateTotal}/>
      </div>
      
      <div className="flex-container">
      <Button value={7} updateTotal={updateTotal}/>
      <Button value={8} updateTotal={updateTotal}/>
      <Button value={9} updateTotal={updateTotal}/>
      </div>
      
      <div className="flex-container">
      <Button value={0} updateTotal={updateTotal}/>
      <Button value={"."} updateTotal={addDecimal}/>
      <Button value={"<"} updateTotal={deleteChar}/>
      </div>
      
      <button className="control-button" onClick={createTransaction}>Add</button>

      <button className="control-button" onClick={clearTransaction}>Clear</button>
  
      <p>food: {categories.food}</p>
      <p>transport: {categories.transport}</p>
      <p>entertainment: {categories.entertainment}</p>
      <p>cinema: {categories.cinema}</p>
      <p>car: {categories.car}</p>
      <p>date: {categories.date}</p>
      <p>drinks: {categories.drinks}</p>
      <p>holiday: {categories.holiday}</p>
      <p>gift: {categories.gift}</p>
      <p>total: {total}</p>
      </>
    );
}
