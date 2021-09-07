import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Category.css';

export default function Category({icon, color, type, onClick}) {
    
    const highlighted = false;

    function createCategory(type){
        if(type === "sub"){
            return (
                <div className="category sub-category">
                    <FontAwesomeIcon icon={icon} color={color} size="1x" onClick={onClick}/>
                </div>
            );
        }else{
            return (
                <div className="category main-category">
                    <FontAwesomeIcon icon={icon} color={color} size="2x" onClick={onClick}/>
                </div>
            );
        }
    }
    
    return createCategory(type);
}
