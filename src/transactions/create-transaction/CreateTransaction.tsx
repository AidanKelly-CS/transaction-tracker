import Button from './Button';
import React, {useState,useRef, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faCoffee, faFilm, faGamepad, faGift, faGlassMartiniAlt, faHeart, faHotdog, faPlaneDeparture, faPlus, faRoute } from '@fortawesome/free-solid-svg-icons'
import Category from '../category/Category';
import './Transaction.css';
import classNames from 'classnames';
import SelectCategory from '../select-category/SelectCategory';
import Modal from '../../modal/Modal';
import { CategoryInterface } from '../category/CategoryInterface';

export default function CreateTransaction() {
    const currency = "£";
    const [total, setTotal] = useState("0");
    const [categories, setCategories] = useState<CategoryInterface[]>([]);
    const [modalOpen,setModalOpen] = useState(false);
    const [clearSelectedCategories, setClearSelectedCategories] = useState(false);

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
      clearTransaction();
      console.log(`transaction created with total of £${total}`);
    }
    
    function clearTransaction(){
      setTotal("0");
      clearCategories();
    }

    function clearCategories(){
      setCategories([]);
      setClearSelectedCategories(true);
    }

    function addCategory(){
      setModalOpen(true);
    }

    function closeModal(){
      setModalOpen(false);
    }

    function setSelectedCategories(selectedCategories: CategoryInterface[]){
      setCategories(selectedCategories);
    }
  
    return (
      <>

      <Modal open={modalOpen} close={closeModal}>
        <SelectCategory setSelectedCategories={setSelectedCategories} clear={clearSelectedCategories} resetClearCategories={()=>setClearSelectedCategories(false)}/>
      </Modal>

      <div className="flex-container">
        {
          categories.map(category => {
            return <Category icon={category.icon} color={category.color} main={category.main} selected={category.selected} onClick={()=>{}}/>
          })
        }

        <Category icon={faPlus} color={"white"} main={true} selected={false} onClick={addCategory}/>
      </div>

      <p className="total">{currency} {total}</p>

      <div className="control-button-container">
        <button className="control-button" onClick={createTransaction}>Add</button>
        <button className="control-button" onClick={clearTransaction}>Clear</button>
      </div>

      <div className="grid-container">
        <Button value={1} updateTotal={updateTotal}/>
        <Button value={2} updateTotal={updateTotal}/>
        <Button value={3} updateTotal={updateTotal}/>
        <Button value={4} updateTotal={updateTotal}/>
        <Button value={5} updateTotal={updateTotal}/>
        <Button value={6} updateTotal={updateTotal}/>
        <Button value={7} updateTotal={updateTotal}/>
        <Button value={8} updateTotal={updateTotal}/>
        <Button value={9} updateTotal={updateTotal}/>
        <Button value={0} updateTotal={updateTotal}/>
        <Button value={"."} updateTotal={addDecimal}/>
        <Button value={"<"} updateTotal={deleteChar}/>
      </div>
      
      </>
    );
}