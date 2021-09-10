import { faHotdog } from '@fortawesome/free-solid-svg-icons';
import Category from '../category/Category';
import './Transaction.css';

export default function Transaction({category, total}) {
    return (
        <div className="transaction container">
            <Category icon={faHotdog} color={"orange"} main={true} selected={false} onClick={()=>{}}/>
            <p>{category}</p>
            <p className="trans-total">{total}</p>
        </div>
    );
}
