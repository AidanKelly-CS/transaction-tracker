import Button from './Button';
import React, {useState,useRef, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCar, faCoffee, faFilm, faGamepad, faGift, faGlassMartiniAlt, faHeart, faHotdog, faPlaneDeparture, faPlus, faRoute } from '@fortawesome/free-solid-svg-icons'
import Category from '../../category/Category';
import './Transaction.css';
import classNames from 'classnames';
import SelectCategory from '../../select-category/SelectCategory';
import Modal from '../../../modal/Modal';
import { CategoryInterface } from '../../category/CategoryInterface';
import { TransactionInterface } from '../view-transactions/TransactionInterface';
import moment from 'moment';

export default function CreateTransaction() {
    const currency = "£";
    const [total, setTotal] = useState("0");
    const [categories, setCategories] = useState<CategoryInterface[]>([]);
    const [catModalOpen,setCatModalOpen] = useState(false);
    const [storeModalOpen,setStoreModalOpen] = useState(false);
    const [clearSelectedCategories, setClearSelectedCategories] = useState(false);
    const [date, setDate] = useState( moment().format("YYYY-MM-DD"));
    
    const [store, setStore] = useState("");
    const [stores, setStores] = useState(["Tesco", "Yo Sushi", "Greggs"]);
    const [selectedStore, setSelectedStore] = useState(stores[0])

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

      const TRANSACTIONS_LOCAL_STORAGE_KEY = "transactions";
      
      try { 
        const transaction = {
          icon: categories[0].icon,
          category: categories[0].label,
          total: parseFloat(total),
          store: selectedStore,
          date: moment(date, "YYYY-MM-DD").toDate()
        } as TransactionInterface;
        
        let savedTransactions = JSON.parse(localStorage.getItem(TRANSACTIONS_LOCAL_STORAGE_KEY)) as TransactionInterface[];
        savedTransactions = savedTransactions === null ? [] : savedTransactions;
        savedTransactions.push(transaction);
        localStorage.setItem(TRANSACTIONS_LOCAL_STORAGE_KEY, JSON.stringify(savedTransactions));

        clearTransaction();
        console.log(`transaction created with total of £${total}`);
      }catch {
        console.log("you must select a category")
      }
    }
    
    function clearTransaction(){
      setTotal("0");
      clearCategories();
    }

    function clearCategories(){
      setCategories([]);
      setClearSelectedCategories(true);
    }

    /**category modal functions*/

    function addCategory(){
      setCatModalOpen(true);
    }

    function closeCatModal(){
      setCatModalOpen(false);
    }

    function setSelectedCategories(selectedCategories: CategoryInterface[]){
      setCategories(selectedCategories);
    }

    /**store modal functions*/

    function addStore(){
      setStoreModalOpen(true);
    }

    function closeStoreModal(){
      setStoreModalOpen(false);
    }

    function addStoreButton(){
      let currentStores = [...stores]
      currentStores.push(store)
      setStores(currentStores)
      setStoreModalOpen(false);
      setStore("")
      
    }



  
    return (
      <>

      <Modal open={catModalOpen} close={closeCatModal}>
        <SelectCategory setSelectedCategories={setSelectedCategories} clear={clearSelectedCategories} resetClearCategories={()=>setClearSelectedCategories(false)}/>
      </Modal>

      <Modal open={storeModalOpen} close={closeStoreModal}>
        <input type="text" value={store} onChange={e => setStore(e.target.value)}></input>
        <button onClick={addStoreButton}>Add</button>
      </Modal>


      <div className="input_field">
        <input value={date} onChange={e => setDate(e.target.value)} type="date" name="date" id="date"></input>
      </div>

      <div className="input_field">
        <select value={selectedStore} onChange={e => setSelectedStore(e.target.value)}>
          {
            stores.map(s => {
              return(
              <option value={s}>{s}</option>
              )
            })
          }
        
        </select>
        <Category icon={faPlus} color={"white"} main={true} selected={false} onClick={addStore}/>

      </div>

      <div className="flex-container">
        {
          categories.map(category => {
            return <Category icon={category.icon} color={category.color} main={category.main} selected={category.selected} onClick={()=>{}}/>
          })
        }

        <Category icon={faPlus} color={"white"} main={true} selected={false} onClick={addCategory}/>
      </div>

      <p className="total">{currency} {total}</p>



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

      <div className="control-button-container">
        <button className="control-button" onClick={clearTransaction}>Clear</button>
        <button className="control-button" onClick={createTransaction}>Add</button>
      </div>
      
      </>
    );
}
