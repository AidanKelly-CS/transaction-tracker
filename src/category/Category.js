import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Category.css';

export default function Category({icon, color, type}) {
    
    function createCategory(type){
        if(type === "sub"){
            return (
                <div class="sub-category">
                    <FontAwesomeIcon icon={icon} color={color} size="1x"/>
                </div>
            );
        }else{
            return (
                <div class="category">
                    <FontAwesomeIcon icon={icon} color={color} size="2x"/>
                </div>
            );
        }
    }
    
    return createCategory(type);
}
