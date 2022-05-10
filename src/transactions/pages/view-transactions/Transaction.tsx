import { faHotdog } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import Category from '../../category/Category';
import './Transaction.css';
import { TransactionInterface } from './TransactionInterface';

export default function Transaction({category, total, icon, store, date}:TransactionInterface) {
    return (
        <div className="transaction container">
            <Category icon={icon} color={"orange"} main={true} selected={false} onClick={()=>{}}/>
            {/* <p>{category}</p> */}
            <p>{store}</p>
            <p>{date ? moment(date).format("YYYY-MM-DD"): "no"}</p>
            <p className="trans-total">£{Number(total).toFixed(2)}</p>
        </div>
    );
}
