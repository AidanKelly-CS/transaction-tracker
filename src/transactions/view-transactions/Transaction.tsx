import { faHotdog } from '@fortawesome/free-solid-svg-icons';
import Category from '../category/Category';
import './Transaction.css';
import { TransactionInterface } from './TransactionInterface';

export default function Transaction({category, total, icon}:TransactionInterface) {
    return (
        <div className="transaction container">
            <Category icon={icon} color={"orange"} main={true} selected={false} onClick={()=>{}}/>
            <p>{category}</p>
            <p className="trans-total">£{parseFloat(total).toFixed(2)}</p>
        </div>
    );
}
